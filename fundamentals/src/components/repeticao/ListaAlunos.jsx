import alunos from '../../data/alunos';

function ListaAlunos(props){

    const studentList = alunos.map(aluno => {
        return <li key={aluno.id}>{aluno.id} - {aluno.nome} - {aluno.nota}</li>
    });
    
    return(
        <div>
            <ul>
                {studentList}
            </ul>
        </div>
    )
}

export default ListaAlunos;