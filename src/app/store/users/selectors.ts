import { User } from ".";
import { AppState } from "..";


export function selectUser(username: string): (state: AppState) => User | undefined {
    return (state: AppState) => {

        const selectedUser: User | undefined = state.users.usersData.find(user => user.id == username);

        if (selectedUser) {

            return state.users.usersData.find(user => user.id == username);
        }
        return;
    }
}