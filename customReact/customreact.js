function customRender(reactElement, mainContainer){

    const domEle = document.createElement(reactElement.type)
    domEle.innerHTML = reactElement.children
    
    for(const prop in reactElement.props){
        domEle.setAttribute(prop, reactElement.props[prop])
    }

    mainContainer.appendChild(domEle)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)