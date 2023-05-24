import Table from '../components/Table.js';

function Dev(){
    const datos = [
        { item1: 'hola', item2: 'adios', item3: 'popo' },
        { item1: 'nose', item2: 'nose2', item3: 'nose3' }
      ];

    return(
        <>
            <Table data={datos}/>
        </>
    );
};

export default Dev;