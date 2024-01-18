export const Contact = () => {
    return (
        <main>
            <h3 className="font-extrabold mb-4 text-3xl">Contact</h3>
            <p>NOTRE MAIL ICI!</p>
            <form action="#" method="post" className="flex flex-col gap-y-8">
                <label htmlFor="name" className="block">Name </label>
                <input type="text" id="name" className="border" placeholder="Votre prénom" autoComplete="off" required />
                <br />
                <label htmlFor="sujet" className="block">Sujet du mail </label>
                <input type="text" id="subject" className="border" placeholder="Quel est le sujet ?" autoComplete="off"/>
                <br />
                <label htmlFor="mail" className="block">E-mail </label>
                <input type="email" id="mail" className="border" placeholder="Votre E-mail " autoComplete="off" required/>
                <br />
                <label htmlFor="message" className="block">Message </label>
                <br />
                <textarea className="border resize-none" id="message" placeholder="Votre message" />
            </form>
        </main>
    );
}