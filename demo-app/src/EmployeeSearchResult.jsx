function EmployeeSearchResult() {

    return (
        <div className="search-result">
            <img src={reactLogo}/>
            <div className="employee-information">
                <h1>Employee Name</h1>
                <p>Employee Phone Number</p>
                <p>Employee Email</p>
            </div>
        </div>
    )
}

export default EmployeeSearchResult;