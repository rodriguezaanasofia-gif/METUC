import express from 'express';
import { GoogleGenAI, GenerateVideosOperation } from '@google/genai';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

const ai = new GoogleGenAI({});

// System prompt with verified METUC institutional knowledge
const METUC_SYSTEM_INSTRUCTION = `
Eres el asistente virtual oficial de METUC (Mutual de Empleados Tucumanos) en el canal interactivo "Chatea con METUC".
Tu objetivo es responder a los usuarios de manera precisa, cordial, empática y profesional.

INFORMACIÓN INSTITUCIONAL OFICIAL DE METUC:
- Nombre: Mutual de Empleados Tucumanos (METUC).
- Alianza estratégica: Con AES (Asociación de Economía Social del Norte Argentino).
- Ubicación: San Miguel de Tucumán, Tucumán, Argentina.
- Sede Central: Atención administrativa de Lunes a Viernes de 8:00 a 18:00 hs.
- Guardia de Sepelio: 24 horas del día, los 365 días del año (atención ininterrumpida).
- Contacto oficial:
  * WhatsApp y Teléfono: +54 9 381 628-2664 (enlace directo: https://wa.me/5493816282664)
  * Correo electrónico: afiliaciones@metuc.org.ar

SERVICIOS Y COBERTURAS:
1. Cobertura Social de Salud:
   - Carencia INMEDIATA: Las consultas y estudios se habilitan desde el primer día de la afiliación activa, sin tiempos de espera.
   - Consultas médicas clínicas y diversas especialidades con atención inmediata.
   - Óptica con valor social (armazones, cristales recetados y lentes accesibles).
   - Estudios de laboratorio (análisis clínicos completos) y diagnóstico por imágenes (radiografías, ecografías).
   - Odontología integral (cuidado preventivo y bucal).
   - Autorizaciones ágiles vía web (enviando foto de la prescripción) o presencial en oficina.

2. Servicio de Sepelio Prestacional Integral 24 Hs:
   - Cobertura integral ante fallecimiento por CUALQUIER causa (inclusive COVID-19).
   - Incluye: Retiro, traslado y acondicionamiento del fallecido; provisión de ataúd reglamentario de primera calidad; traslados en coche fúnebre y vehículos de acompañamiento; salas velatorias de primer nivel con servicio de cafetería; cobertura de inhumación o cremación; gestión y trámites administrativos en Registro Civil y cementerios; certificación médica obligatoria.
   - Guardia permanente activa 24 horas los 365 días del año.
   - Carencia según tabla de edades.

3. Reintegro en Farmacias (Exclusivo Plan METUC FULL):
   - 10% de reintegro en medicamentos recetados sobre el monto total de la compra.
   - Tope de reintegro: hasta $10.000 mensual por grupo familiar.
   - Trámite ágil presentando ticket de compra y receta médica.
   - Red de farmacias adheridas en San Miguel de Tucumán (Farmacia del Pueblo, Farmacia Plazoleta, Farmacia La Unión, etc.).

4. Planes Disponibles:
   - Plan Salud: Consultas médicas, óptica, laboratorio, diagnóstico por imágenes y odontología.
   - Plan Sepelio: Cobertura funeraria prestacional 24 hs completa con salas velatorias y trámites.
   - Plan METUC FULL (El más elegido): Combina todo el Plan Salud + todo el Plan Sepelio 24 hs + 10% reintegro en farmacias (tope $10.000/mes) + descuentos en Turismo Social y formación/capacitaciones mutuales.

5. Grupo Familiar y Adherentes:
   - Todos los planes incluyen al titular, cónyuge o conviviente y hasta dos hijos de 1 a 18 años.
   - Se pueden incorporar adherentes mayores (padres, abuelos, tíos) y menores adicionales mediante una cuota solidaria diferencial por cada uno.

REGLA FUNDAMENTAL DE PRECISIÓN Y DERIVACIÓN A WHATSAPP:
- Responde siempre con información precisa y certera basada en estos datos.
- Si el usuario pregunta algo que NO sabes con certeza (por ejemplo: el monto exacto en pesos de una cuota que requiera cotización por edad, un prestador o farmacia específica que no figure en los registros, trámites de excepcionalidad médica o casos legales particulares):
  * Debes aclararlo de manera transparente.
  * Debes recomendarle explícitamente comunicarse directamente por WhatsApp al +54 9 381 628-2664 o a través del enlace https://wa.me/5493816282664 para que un asesor oficial de METUC le brinde la cotización o respuesta exacta en el momento.
- Mantén un tono cálido, solidario, claro y conciso. Evita respuestas excesivamente largas.
`;

// AI Assistant Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'El mensaje es requerido' });
    }

    // Format chat contents
    const contents: any[] = [];

    // Append prior history if provided
    if (Array.isArray(history)) {
      for (const item of history.slice(-8)) {
        if (item && item.text && (item.role === 'user' || item.role === 'model')) {
          contents.push({
            role: item.role,
            parts: [{ text: item.text }],
          });
        }
      }
    }

    // Append current user message
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    // Generate content with model candidate order (fastest first)
    const CANDIDATE_MODELS = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];
    let reply = '';
    let lastError: any = null;

    for (const model of CANDIDATE_MODELS) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction: METUC_SYSTEM_INSTRUCTION,
            temperature: 0.2,
          },
        });
        if (response.text) {
          reply = response.text;
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${model} failed, trying next candidate:`, err?.message || err);
      }
    }

    if (!reply) {
      throw lastError || new Error('No se pudo obtener respuesta del modelo');
    }

    res.json({ reply });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({
      error: 'Error al comunicarse con el asistente',
      reply: 'En este momento nuestro asistente no pudo responder. Podés consultar directamente a nuestros asesores por WhatsApp al +54 9 381 628-2664 (https://wa.me/5493816282664).',
    });
  }
});

// Veo Video Generation endpoint
app.post('/api/generate-video', async (req, res) => {
  try {
    const { image, prompt, aspectRatio = '16:9' } = req.body;

    let base64Data = image || '';
    let mimeType = 'image/png';

    if (base64Data.startsWith('data:')) {
      const match = base64Data.match(/^data:([^;]+);base64,(.+)$/);
      if (match) {
        mimeType = match[1];
        base64Data = match[2];
      }
    }

    const videoPrompt =
      prompt ||
      'Cinematic ambient logo animation gently illuminating with brilliant radiant glowing light, soft light rays and slow dimming darkening breath in a looping motion background';

    const operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: videoPrompt,
      ...(base64Data
        ? {
            image: {
              imageBytes: base64Data,
              mimeType: mimeType,
            },
          }
        : {}),
      config: {
        numberOfVideos: 1,
        aspectRatio: aspectRatio === '9:16' ? '9:16' : '16:9',
      },
    });

    res.json({ operationName: operation.name });
  } catch (error: any) {
    console.error('Error starting video generation:', error);
    res.status(500).json({ error: error?.message || 'Failed to generate video' });
  }
});

app.post('/api/video-status', async (req, res) => {
  try {
    const { operationName } = req.body;
    if (!operationName) {
      return res.status(400).json({ error: 'operationName is required' });
    }

    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });

    res.json({
      done: updated.done || false,
      error: updated.error || null,
    });
  } catch (error: any) {
    console.error('Error checking video status:', error);
    res.status(500).json({ error: error?.message || 'Failed to check status' });
  }
});

app.post('/api/video-download', async (req, res) => {
  try {
    const { operationName } = req.body;
    if (!operationName) {
      return res.status(400).json({ error: 'operationName is required' });
    }

    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });
    const uri = updated.response?.generatedVideos?.[0]?.video?.uri;

    if (!uri) {
      return res.status(404).json({ error: 'Video URI not found' });
    }

    const apiKey = process.env.GEMINI_API_KEY || '';
    const videoRes = await fetch(uri, {
      headers: { 'x-goog-api-key': apiKey },
    });

    if (!videoRes.ok) {
      throw new Error(`Failed to fetch video stream: ${videoRes.statusText}`);
    }

    res.setHeader('Content-Type', 'video/mp4');
    const buffer = Buffer.from(await videoRes.arrayBuffer());
    res.send(buffer);
  } catch (error: any) {
    console.error('Error downloading video:', error);
    res.status(500).json({ error: error?.message || 'Failed to download video' });
  }
});

// Vite middleware in dev or static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
} else {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
