import React from 'react';
import Link from "next/link";

class NavbarItem extends React.Component {
    createItem(item, children) {
        if (children.length > 0) {
            return <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href={item.link} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {item.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {children.map(x => <Link key={x.id} className="dropdown-item" href={x.link_to}><a className="nav-link">{x.name}</a></Link>)}
                </div>
            </li>
        } else {
            return <li className="nav-item">
                <Link className="nav-link" href={item.link_to}><a className="nav-link">{item.name}</a></Link>
            </li>
        }

    }
    render() {
        return (
            this.createItem(this.props.item, this.props.children)
        )
    }
}

export default NavbarItem;