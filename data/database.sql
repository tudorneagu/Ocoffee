
DROP TABLE IF EXISTS "coffee"; 
CREATE TABLE IF NOT EXISTS "coffee" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT, 
   "reference" TEXT,
  "description" TEXT,
  "origin" TEXT, 
  "price" TEXT,
 "caracteristics" TEXT, 
 "availability" BOOLEAN,
 "create_date" TEXT DEFAULT CURRENT_DATE
); 

set client_encoding to utf8;

INSERT INTO "coffee" (name, reference, description, origin, price, caracteristics, availability, create_date) VALUES
('Espresso', '100955890', 'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu.', 'Italie', '20.99 ', 'Corsé', TRUE, '2024-05-15'),
('Columbian', '100955894', 'Café moyennement corsé avec une acidité vive et une saveur riche.', 'Colombie', '18.75 ', 'Acide', TRUE, '2024-05-18'),
('Ethiopian Yirgacheffe', '105589090', 'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.', 'Éthiopie', '22.50 ', 'Fruité', TRUE, '2024-05-20'),
('Brazilian Santos', '134009550', 'Café doux et lisse avec un profil de saveur de noisette.', 'Brésil', '17.80 ', 'Doux', TRUE, '2024-05-22'),
('Guatemalan Antigua', '256505890', 'Café corsé avec des nuances chocolatées et une pointe d''épice.', 'Guatemala', '21.25 ', 'Corsé', TRUE, '2024-05-25'),
('Kenyan AA', '295432730', 'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.', 'Kenya', '23.70 ', 'Acide', TRUE, '2024-05-28'),
('Sumatra Mandheling', '302932754', 'Café profond et terreux avec un corps lourd et une faible acidité.', 'Indonésie', '19.95 ', 'Corsé', TRUE, '2024-05-30'),
('Costa Rican Tarrazu', '327302954', 'Café vif et net avec une finition propre et une acidité vive.', 'Costa Rica', '24.50 ', 'Acide', TRUE, '2024-06-02'),
('Vietnamese Robusta', '549549090', 'Café audacieux et fort avec une saveur robuste distinctive.', 'Vietnam', '16.75 ', 'Épicé', TRUE, '2024-06-05'),
('Tanzanian Peaberry', '582954954', 'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.', 'Tanzanie', '26.80 ', 'Fruité', TRUE, '2024-06-08'),
('Jamaican Blue Mountain', '589100954', 'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.', 'Jamaïque', '39.25 ', 'Doux', TRUE, '2024-06-10'),
('Rwandan Bourbon', '650753915', 'Café avec des notes florales prononcées, une acidité vive et un corps moyen.', 'Rwanda', '21.90 ', 'Fruité', TRUE, '2024-06-12'),
('Panamanian Geisha', '795501340', 'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.', 'Panama', '42.00 ', 'Fruité', TRUE, '2024-06-15'),
('Peruvian Arabica', '954589100', 'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.', 'Pérou', '19.40 ', 'Chocolaté', FALSE, '2024-06-18'),
('Hawaiian Kona', '958090105', 'Café rare au goût riche, une acidité douce et des nuances subtiles.', 'Hawaï', '55.75 ', 'Doux', FALSE, '2024-06-20'),
('Nicaraguan Maragogipe', '691550753', 'Café avec des notes de fruits, une acidité vive et un corps plein.', 'Nicaragua', '28.60 ', 'Fruité', FALSE, '2024-06-22');
