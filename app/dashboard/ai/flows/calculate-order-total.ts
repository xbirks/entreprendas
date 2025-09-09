'use server';

/**
 * @fileOverview A flow to calculate the total order amount based on the services provided.
 *
 * - calculateOrderTotal - Calculates the total order amount.
 * - CalculateOrderTotalInput - The input type for the calculateOrderTotal function.
 * - CalculateOrderTotalOutput - The return type for the calculateOrderTotal function.
 */

import {ai} from '@/app/dashboard/ai/genkit';
import {z} from 'genkit';

const CalculateOrderTotalInputSchema = z.object({
  services: z.array(
    z.object({
      name: z.string().describe('El nombre del servicio prestado.'),
      cost: z.number().describe('El coste del servicio.'),
      duration: z.number().describe('La duración del servicio en minutos.'),
    })
  ).describe('Una lista de los servicios prestados al cliente.'),
});
export type CalculateOrderTotalInput = z.infer<typeof CalculateOrderTotalInputSchema>;

const CalculateOrderTotalOutputSchema = z.object({
  totalAmount: z.number().describe('El importe total calculado para el pedido.'),
  discountSuggestion: z.string().describe('Una sugerencia sobre si redondear el precio final al alza o a la baja y por qué.'),
});
export type CalculateOrderTotalOutput = z.infer<typeof CalculateOrderTotalOutputSchema>;

export async function calculateOrderTotal(input: CalculateOrderTotalInput): Promise<CalculateOrderTotalOutput> {
  return calculateOrderTotalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'calculateOrderTotalPrompt',
  input: {schema: CalculateOrderTotalInputSchema},
  output: {schema: CalculateOrderTotalOutputSchema},
  prompt: `Eres un sastre experto que ayuda a otro sastre a calcular el precio final de sus trabajos. Tu objetivo es maximizar sus beneficios y la satisfacción del cliente.

  Servicios realizados:
  {{#each services}}
  - Nombre: {{this.name}}, Coste: {{this.cost}}€, Duración: {{this.duration}} minutos
  {{/each}}

  El total actual es la suma de los costes. Calcula un precio final sugerido (totalAmount) y una breve justificación (discountSuggestion).

  Reglas para la sugerencia:
  1. No sugieras descuentos. En su lugar, enfócate en redondear el precio para que sea un número "redondo" (por ejemplo, terminar en .00, .50, o el número entero más cercano).
  2. Si el trabajo fue complejo, rápido o de gran calidad, sugiere un ligero redondeo al alza (por ejemplo, de 43.50€ a 45€) y justifícalo brevemente (ej: "Redondeo al alza por la complejidad del zurcido").
  3. Si el trabajo fue muy simple o tomó más tiempo de lo esperado para algo sencillo, sugiere un ligero redondeo a la baja (ej: de 12.30€ a 12€) como un gesto de buena voluntad (ej: "Redondeo a la baja como cortesía por un trabajo sencillo.").
  4. Si el precio ya es redondo o justo, simplemente confirma que el precio es adecuado (ej: "El precio es justo y redondo.").
  5. La justificación debe ser muy breve, una sola frase.
  
  Calcula el 'totalAmount' final y la 'discountSuggestion'.`,
});

const calculateOrderTotalFlow = ai.defineFlow(
  {
    name: 'calculateOrderTotalFlow',
    inputSchema: CalculateOrderTotalInputSchema,
    outputSchema: CalculateOrderTotalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
