import $api from "./index";

class API {
    static async searchUsers(query: string, pageNum: number) {
        try {
            const queryRoute = "/search/users";
            const queryParam = "?q=" + query;
            const searchInLogin = "+in:login";
            const queryType = "+type:user&type=Users";
            const resultPerPage = "&per_page=10";
            const pageNumber = "&page=" + pageNum;

            const result = await $api.get(
                queryRoute +
                    queryParam +
                    searchInLogin +
                    queryType +
                    resultPerPage +
                    pageNumber
            );

            if (result.status === 200) {
                for (let i = 0; i < result.data.items.length; i++) {
                    const userResult = await this.getUser(
                        result.data.items[i].login
                    );
                    if (userResult?.status === 200) {
                        result.data.items[i].detailed_data = userResult.data;
                    }
                }
            }

            return result;
        } catch (error) {
            console.error("API fetch users error", error);
        }
    }

    static async getUser(userName: string) {
        try {
            const queryRoute = "/users/" + userName;
            const result = $api.get(queryRoute);

            return result;
        } catch (error) {
            console.error("API get user error", error);
        }
    }
}

export default API;
