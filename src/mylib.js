window.onload = function () {
    class Entity extends React.Component {
        render() {
            return React.createElement("div", { className: "entity" }, React.createElement("div", {}, `${this.props.data.name}`), React.createElement("div", {}, `${this.props.data.other}`));
        }
    }

    class Entities extends React.Component {
        render() {
            return this.props.entities.map((o, idx) => React.createElement(Entity, { key: idx, data: o }));
        }
    }

    ReactDOM.render(React.createElement(Entities, { entities: entities }), document.getElementById("mycomp"));
};
