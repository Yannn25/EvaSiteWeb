import '../styles/contact.css'

export const Contact = () => {
    return (
        <div>
            <div class="container">
                <div class="form-container">
                    <h2 class="pink"> Get In Touch</h2>
                        <form>
                            <input type="text" placeholder="Name" /><br />
                            <input type="email" placeholder="Email" /><br />
                            <input type="text" placeholder="Subject" /><br />
                            <textarea placeholder="Message"></textarea><br />
                            <button><i class="fa-solid fa-paper-plane"></i></button>
                        </form>
                </div>
            </div>
        </div>
    );
};