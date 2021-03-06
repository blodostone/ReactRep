const baseUrl = "https://5f2245460e9f660016d87f8f.mockapi.io/tasks/yoyoy";

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;utc-8'
        },
        body: JSON.stringify(taskData),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to create task')
        };
    });
};

export const fetchTasksList = () => {
    return fetch(baseUrl).then(res => {
        if (res.ok) {
            return res.json()
        }
    })
        .then(tasksList => {
            return tasksList.map(({ _id, ...task }) => ({
                id: _id,
                ...task,
            }))
        })
}

export const updatedTask = (taskId, taskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json;utc-8'
        },
        body: JSON.stringify(taskData),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to update task');
        };
    });
};

export const deleteTask = (taskId) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    }).then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete task')
        };
    });
};