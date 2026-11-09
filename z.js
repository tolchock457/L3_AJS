function getPostsWithCallback(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.onload = function() {
        if (xhr.status === 200) {
            let posts = JSON.parse(xhr.responseText);
            posts.sort((a, b) => b.title.length - a.title.length);
            callback(null, posts);
        } else {
            callback(new Error('Ошибка загрузки постов'));
        }
    };
    xhr.send();
}
function getCommentsWithCallback(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
    xhr.onload = function() {
        if (xhr.status === 200) {
            let comments = JSON.parse(xhr.responseText);
            comments.sort((a, b) => a.name.localeCompare(b.name));
            callback(null, comments);
        } else {
            callback(new Error('Ошибка загрузки комментариев'));
        }
    };
    xhr.send();
}
function getPostsWithCallback(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.onload = function() {
        if (xhr.status === 200) {
            let posts = JSON.parse(xhr.responseText);
            posts.sort((a, b) => b.title.length - a.title.length);
            callback(null, posts);
        } else {
            callback(new Error('Ошибка загрузки постов'));
        }
    };
    xhr.send();
}
function getCommentsWithCallback(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
    xhr.onload = function() {
        if (xhr.status === 200) {
            let comments = JSON.parse(xhr.responseText);
            comments.sort((a, b) => a.name.localeCompare(b.name));
            callback(null, comments);
        } else {
            callback(new Error('Ошибка загрузки комментариев'));
        }
    };
    xhr.send();
}
function getUsersWithPromises() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            return users.map(user => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone
            }));
        });
}
function getTodosWithPromises() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => todos.filter(todo => !todo.completed));
}
async function runAllAsyncOperations() {
    try {
        const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await postsRes.json();
        posts.sort((a, b) => b.title.length - a.title.length);
        const commentsRes = await fetch('https://jsonplaceholder.typicode.com/comments');
        let comments = await commentsRes.json();
        comments.sort((a, b) => a.name.localeCompare(b.name));
        const usersRes = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await usersRes.json();
        let filteredUsers = users.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        }));
        const todosRes = await fetch('https://jsonplaceholder.typicode.com/todos');
        let todos = await todosRes.json();
        let filteredTodos = todos.filter(todo => !todo.completed);

        console.log("Всё готово:", { posts, comments, filteredUsers, filteredTodos });
    } catch (error) {
        console.error('Чот сломалось:', error);
    }
}
