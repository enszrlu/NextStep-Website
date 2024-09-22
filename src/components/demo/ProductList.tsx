import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NextStepViewport } from '../../../../NextStep/src';

interface Product {
  id: number;
  name: string;
  price: string;
}

const generateProducts = (): Product[] => {
  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
  }));
};

const ProductListDemo: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(generateProducts());
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 w-[600px] lg:w-[900px]">
      {products.map((product) => (
        <Card
          key={product.id}
          className="w-[160px] lg:w-[300px]"
          id={`product-${product.id}`}
        >
          <CardHeader>
            <CardTitle className="text-sm">{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>${product.price}</p>
            <Button className="mt-2 w-full">Add to Cart</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductListDemo;
