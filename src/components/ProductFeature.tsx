interface ProductFeatureProps {
  title: string;
  description: string;
}

export function ProductFeature({ title, description }: ProductFeatureProps) {
  return (
    <div className="text-center p-8">
      <h3 className="text-xl font-serif mb-4 text-amber-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}