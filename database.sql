CREATE TABLE cosmetics (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    category VARCHAR(50),
    brand VARCHAR(50),
    price DECIMAL(10,2),
    expiry_date DATE
);
INSERT INTO cosmetics (name, category, brand, price, expiry_date) VALUES
('Liquid Foundation', 'Face Makeup', 'Lakme', 499.00, '2027-05-10'),
('Matte Lipstick', 'Lip Makeup', 'Maybelline', 299.00, '2026-12-15'),
('Compact Powder', 'Face Makeup', 'MAC', 1200.00, '2027-03-20'),
('BB Cream', 'Face Makeup', 'Garnier', 250.00, '2026-11-05'),
('Sunscreen SPF 50', 'Skincare', 'Neutrogena', 450.00, '2027-08-01'),
('Moisturizer Cream', 'Skincare', 'Nivea', 350.00, '2026-10-10'),
('Kajal Pencil', 'Eye Makeup', 'Lakme', 150.00, '2027-01-25'),
('Mascara', 'Eye Makeup', 'Maybelline', 399.00, '2026-09-18'),
('Blush Powder', 'Face Makeup', 'Colorbar', 650.00, '2027-06-30'),
('Lip Balm', 'Lip Care', 'Himalaya', 120.00, '2026-08-22');

SELECT * FROM cosmetics;
INSERT INTO cosmetics (name, category, brand, price, expiry_date) VALUES
('Vitamin C Serum', 'Skincare', 'Minimalist', 699.00, '2026-12-01'),
('Aloe Vera Gel', 'Skincare', 'Patanjali', 180.00, '2027-04-15'),
('Face Wash', 'Skincare', 'Clean & Clear', 220.00, '2026-09-10'),
('Hair Serum', 'Hair Care', 'Livon', 310.00, '2027-02-20'),
('Shampoo', 'Hair Care', 'Dove', 450.00, '2027-06-18'),
('Conditioner', 'Hair Care', 'Tresemme', 500.00, '2027-05-25'),
('Nail Polish', 'Nail Care', 'Lakme', 120.00, '2027-03-12'),
('Makeup Remover', 'Skincare', 'Garnier', 250.00, '2026-11-30'),
('Face Primer', 'Face Makeup', 'Colorbar', 850.00, '2027-07-14'),
('Highlighter', 'Face Makeup', 'Maybelline', 600.00, '2027-01-28'),
('Eyebrow Pencil', 'Eye Makeup', 'Faces Canada', 275.00, '2026-10-05'),
('Lip Gloss', 'Lip Makeup', 'Nykaa', 350.00, '2027-08-09'),
('Sheet Mask', 'Skincare', 'Mamaearth', 150.00, '2026-08-19'),
('Body Lotion', 'Skincare', 'Vaseline', 300.00, '2027-04-01'),
('Perfume Spray', 'Fragrance', 'Engage', 550.00, '2028-01-01');

ALTER TABLE cosmetics ADD COLUMN stock INT;
UPDATE cosmetics SET stock = 10;
ALTER TABLE cosmetics ADD COLUMN stock INT DEFAULT 10;