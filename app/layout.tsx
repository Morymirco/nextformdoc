import './ui/global.css';
import { inter } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* En ajoutant Interà l' <body>élément, la police sera appliquée dans toute votre application. Ici, vous ajoutez également le Tailwindantialiasedclasse qui lisse la police. Il n'est pas nécessaire d'utiliser cette classe, mais elle ajoute une touche agréable. */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
