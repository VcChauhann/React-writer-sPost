import { useState } from "react";
import { CardGroup, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './home.css';
function Home() {

    const [themes, setThemes] = useState([
        { key: 0, name: '#f47820', textColor: 'white', img: '' },
        { key: 1, name: '#8350a0', textColor: 'white', img: '' },
        { key: 2, name: '#51bb7b', textColor: 'white', img: '' },
        { key: 3, name: '#fff', textColor: 'black', img: '' }
    ])
    return (
        <div>
            <section className="cards">

                {
                    themes.map((theme, i) =>
                        <article className="card" key={i} style={{ backgroundColor: theme.name, color:theme.textColor }}>
                            <picture className="thumbnail">
                                <img className="category__01" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/cloud.svg" alt="" />
                            </picture>
                            <div className="card-content">
                                <p className="category category__01">Cloud Storage</p>
                                <h2>content Storage</h2>
                                <Link key={i} to={'edit'} onClick={()=>(
                                    localStorage.setItem("selectedTheme",theme.name)
                                )}>edit</Link>
                            </div>
                            <footer>
                                <div className="post-meta">
                                    <span className="timestamp"><i className="fa fa-clock-o"></i> 6 mins ago</span>
                                    <span className="comments"><i className="fa fa-comments"></i><a href="#"> 14 comments</a></span>
                                </div>
                            </footer>
                        </article>
                    )
                }

            </section>
        </div>
    )
}
export default Home;