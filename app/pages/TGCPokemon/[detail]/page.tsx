import React from 'react';

interface Params {
    id: any;
}

const TGCPokemonDetail = ({ params }: { params: Params }) => {
    console.log(params);

    return (
        <div>
            Detalles de TGCPokemon: {params.id}
        </div>
    );
};

export default TGCPokemonDetail;
