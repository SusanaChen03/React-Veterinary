const Appointment = () => {
    const formSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = {
                treatment: e.target[0].value,
                date: e.target[1].value,
                professional: e.target[2].value,
                idPet: e.target[3].value,
            };

            const postAppointment = await fetch("https://chen-veterinary.herokuapp.com/appointment", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (postAppointment) {
                alert("The new appointment is generated")
            }
        } catch (error) {
            alert("Not Good" + error)
        }

    };

    return (
        <div className="generalAppointment">
            <h1>Appointment for bichito</h1>
            <form onSubmit={(e) => formSubmit(e)}>
        
                <label for="treatment">Treatment</label>
                <input type="text" id="treatment" name="treatment" />

                <label for="date">Date</label>
                <input type="date" id="date" name="date" />

                <label for="professional">Choose your doctor:</label>
                <select id="professional">
                    <option value="Mihai">Mihai</option>
                    <option value="Susana">Susana</option>
                    <option value="Alex">Alex</option>
                    <option value="David">David</option>
                    <option value="Rogelio">Rogelio</option>
                    
                </select>

                <input type="submit" value="ACCEPT" className="sendButton"></input>
            </form>
        </div>
    );
}

export default Appointment;