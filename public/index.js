const root = document.querySelector('#root');

const resultsDiv = document.createElement('div');
const classes = ['text-lg', 'font-bold', 'bg-clip-text', 'text-transparent', 'bg-gradient-to-r', 'from-pink-500', 'to-blue-500', 'hover:text-blue-600'];

resultsDiv.classList.add(...classes);

const fetchResults = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const data = fetchResults('https://jsonplaceholder.typicode.com/posts/1/comments')
data.then(d => resultsDiv.innerHTML = `${d[0].name}`);

root.append(resultsDiv);