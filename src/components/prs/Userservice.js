class UserService {

    static baseurl;

    static getUsers = async () => {
        const res = await fetch(baseurl);
        const users = await res.json();
        console.debug("Users:", users);
        return users;
    }

    static getUser = async (id) => {
        const url = `${baseurl}/${id}`;
        const res = await fetch(url);
        const user = await res.json();
        console.debug("User:", user);
        return user;
    }

    static addUser = async (user) => {
        const res = await fetch(`${baseuri}`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        });
        console.debug("Add:", res);
    }

    static chgUser = async (user) => {
        const res = await fetch(`${baseuri}/${user.id}`, {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(user)
        });
        console.debug("Chg:", res);
    }


    static delUser = async () => {
        const id = user.value.id;
        const res = await fetch(`${baseuri}/${id}`, { method: 'DELETE', mode: 'cors' });
        console.debug("Del:", res);
    }
}