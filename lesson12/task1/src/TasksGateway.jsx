const baseUrl = 'https://5f16d5d3a346a00016739644.mockapi.io/tasks/tasks';

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;utf-8',
        },
        body: JSON.stringify(taskData)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Faild to create task')
        }
    })
}

export const fetchTasksList = () => {
    return fetch(baseUrl).then(response => {
        if (response.ok) {
            return response.json()
        }
    })
}


export const updatedTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData)
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to change status of task')
        } 
    });
}

export const deleteTask = taskId => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    }).then(response => {
        if (!response.ok) {
            throw new Error('Faild to create task')
        } 
    });
};