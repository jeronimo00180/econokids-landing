export interface Testimonial {
  /** Citation du parent, entre guillemets sur la page */
  quote: string;
  /** Prénom + initiale, ex. "Sophie M." */
  author: string;
  /** Ex. "Maman de Léa (10 ans)" */
  role: string;
  /** Résultat concret optionnel, ex. "Premier projet d'épargne réalisé" */
  result?: string;
  /** Note sur 5 */
  rating: number;
}

/**
 * ⚠️ Uniquement de VRAIS témoignages de parents, avec leur accord.
 * Tant que ce tableau est vide, la section témoignages ne s'affiche pas
 * sur la landing — elle apparaîtra automatiquement dès le premier ajout.
 *
 * Format d'un témoignage :
 * {
 *   quote: "Mon fils voulait toujours tout acheter immédiatement. Depuis
 *           Econo'kids, il épargne pour son vélo. Il compte, il planifie.",
 *   author: "Thomas D.",
 *   role: "Papa de Lucas (9 ans)",
 *   result: "Premier projet d'épargne réalisé",
 *   rating: 5,
 * }
 */
export const testimonials: Testimonial[] = [];
