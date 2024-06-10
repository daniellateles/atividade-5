import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import './task.css';

function Tasks() {
    const tasks = [
        'Tarefa 1',
        'Tarefa 2',
        'Tarefa 3',
        'Tarefa 4',
        'Tarefa 5'
    ];

    return (
        <>
            <h2>Lista de tarefas</h2>
            <Stack className='add' direction='row' spacing={8} align='center'>

                <Stack direction='column'>
                    <label className='label_tarefa' htmlFor="tarefa">Inserir Nova Tarefa:</label>
                    <input type="text" />
                </Stack>

                <input type="checkbox" name="realizada" id="realizadachb" />
                <label htmlFor="realizadachb">Realizada?</label>

                <Button className='btn-inserir' colorScheme='blue' variant='solid'>Inserir</Button>

            </Stack>

            <section>
                <ul>
                    {tasks.map((task, index) => (
                        <Stack direction='row' spacing={8} align='center' justifyContent={'space-between'}>
                            <li key={index}>{task}</li>
                            <div className="botoes">
                                <ButtonGroup>
                                    <Button className='btn-red' colorScheme="red" variant='solid'>Pendente</Button>
                                    <Button className='btn-red' colorScheme='red' variant='solid'>Excluir</Button>
                                </ButtonGroup>
                            </div>
                        </Stack>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default Tasks;
