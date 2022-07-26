import Draggable from 'vuedraggable';
export default {
    data() {
        return {
            columns: [
                { title: 'John', text: '' },
                { title: 'Joao', text: '' },
                { title: 'Jean', text: '' },
            ],
        };
    },
    render(h) {
        return (<Draggable tag="ul">
        {this.columns.map((element) => (<li>
            {/*<i class="fa fa-align-justify handle" />*/}
            <span class="text">{element.title} </span>
          </li>))}
      </Draggable>);
    },
};
//# sourceMappingURL=index.jsx.map