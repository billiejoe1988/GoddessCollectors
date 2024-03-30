import React from 'react';

interface Params {
    id: any;
}
const SculptureDetail = ({ params }: { params: Params }) => {
    console.log(params);

    return (
        <div>
            Estás viendo: {params.id}
        </div>
    );
};

export default SculptureDetail;
