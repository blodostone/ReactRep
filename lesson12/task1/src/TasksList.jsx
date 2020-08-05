import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput'
import { createTask, fetchTasksList, updatedTask, deleteTask } from './TasksGateway'



class TasksList extends React.Component {
    state = {
        tasks: [],
    }

    componentDidMount() {
        this.hetchTasks()
    }

    hetchTasks = () => {
        fetchTasksList()
            .then(tasksList =>
                this.setState({
                    tasks: tasksList
                }),
            );
    };

    onCreate = text => {
        const newTask = {
            text,
            done: false
        }

        createTask(newTask)
            .then(() => this.hetchTasks())
    }

    handleTaskStatusChange = id => {
        const { done, text } = this.state.tasks.find(task => task.id === id)
        const upTask = {
            ...text,
            done: !done
        };

        updatedTask(id, upTask)
            .then(() => this.hetchTasks())



            
    };

    handleTaskDelete = id => {
        deleteTask(id)
        .then(() => this.hetchTasks())
        
    };


    render() {
        const sortedList = this.state.tasks
            .slice()
            .sort((a, b) => a.done - b.done)
        return (
            <div className="todo-list">
                <CreateTaskInput onCreate={this.onCreate} />
                <ul className="list">
                    {sortedList.map(task => (
                        <Task
                            key={task.id}
                            {...task}
                            onDelete={this.handleTaskDelete}
                            onChange={this.handleTaskStatusChange}
                        />
                    ))}

                </ul>
            </div>
        )
    }
}

export default TasksList;