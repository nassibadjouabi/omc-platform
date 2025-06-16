import React from 'react';

/**
 * Composant Card - Conteneur stylisé pour afficher du contenu.
 */
const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-gray-900 border border-gray-700 rounded-lg shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
};

/**
 * Composant CardHeader - En-tête du Card.
 */
const CardHeader = ({ children, className = '' }) => {
  return <div className={`mb-4 border-b pb-2 ${className}`}>{children}</div>;
};

/**
 * Composant CardTitle - Titre du Card.
 */
const CardTitle = ({ children, className = '' }) => {
  return <h2 className={`text-xl font-bold text-white ${className}`}>{children}</h2>;
};

/**
 * Composant CardContent - Contenu du Card.
 */
const CardContent = ({ children, className = '' }) => {
  return <div className={`text-gray-300 ${className}`}>{children}</div>;
};

// Exportation des composants
export { Card, CardHeader, CardTitle, CardContent };
