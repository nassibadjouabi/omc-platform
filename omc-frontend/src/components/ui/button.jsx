import React from 'react';

/**
 * Composant Button - Bouton générique personnalisable.
 *
 * @param {ReactNode} children - Contenu à afficher à l'intérieur du bouton.
 * @param {Function} onClick - Fonction appelée lors du clic sur le bouton.
 * @param {string} className - Classes CSS supplémentaires à appliquer au bouton.
 * @param {string} variant - Variante du bouton (par exemple, "primary", "secondary", etc.).
 */
const Button = ({ children, onClick, className = '', variant = 'default' }) => {
  // Définir les classes CSS dynamiquement en fonction de la variante
  const buttonClasses = `button ${variant} ${className}`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

// Export par défaut du composant Button
export default Button;