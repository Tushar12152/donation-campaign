
const Donation = () => {
    const donation=JSON.parse(localStorage.getItem('donation'))
    console.log(donation)
    return (
        <div>
             Donation
        </div>
    );
};

export default Donation;