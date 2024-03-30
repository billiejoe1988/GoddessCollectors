import React from 'react';

interface Params {
    id: any;
}

const TGCOnePieceDetail = ({ params }: { params: Params }) => {
    console.log(params);

    return (
        <div>
            Detalles de TGCOnePiece: {params.id}
        </div>
    );
};

export default TGCOnePieceDetail;
