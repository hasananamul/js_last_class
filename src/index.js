import "./index.css";
import post from "./Post";
import Alert from "./components/alert";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";

/**
 * Get post_show elements
 */
document.querySelector('.post_form').addEventListener('submit', create_post);
/**
 * Get all data from JSON server
 */
const get_post = () => {
    axios.get("http://localhost:5050/post").then(response => post.show_post(response.data));
}
get_post()

//Get element alert_msg
let alert_msg = document.querySelector('.alert_msg');

/**
 * Create post
 * @param {string} e 
 */

function create_post(e) {
    e.preventDefault();
    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data);
    if (data.name == '' || data.photo == '' || data.content == '') {
        alert_msg.innerHTML = Alert.danger('All the field are required !')
    } else {
        axios.post('http://localhost:5050/post', {
            name: data.name,
            photo: data.photo,
            post_content: data.content,
        }).then(res => {
            get_post()
            document.querySelector('.modal').style.display = 'none'
        })
    }
}