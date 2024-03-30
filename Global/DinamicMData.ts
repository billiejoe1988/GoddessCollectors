interface MetadataParams {
    params: any;
    searchParams: any;
    parent: any;
  }
  
  export async function generateMetadata({ params, searchParams, parent }: MetadataParams) {
    const id = params.id;
    const product = await fetch(`https://....../${id}`).then((res) => res.json());
  
    return {
      title: product.title,
      description: product.description,
    };
  }
  