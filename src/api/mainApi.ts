import $api from "./index";

class API {
    static async searchUsers(query: string, pageNum: number) {
        try {
            const queryParam = "?q=" + query;
            const searchInLogin = "+in:login";
            const queryType = "+type:user&type=Users";
            const resultPerPage = "&per_page=10";
            const pageNumber = "&page=" + pageNum;
            const queryRoute =
                "/search/users" +
                queryParam +
                searchInLogin +
                queryType +
                resultPerPage +
                pageNumber;

            const result = await $api.get(queryRoute);

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

    static async getAllUserRepos(userName: string) {
        try {
            const queryParam = "?q=";
            const searchInName = "in:name";
            const searchByUser = "+user:" + userName;
            const addForkedRepos = "+fork:true";
            const resultPerPage = "&per_page=10";
            const pageNumber = "&page=1";
            const queryRoute =
                "/search/repositories" +
                queryParam +
                searchInName +
                searchByUser +
                addForkedRepos +
                resultPerPage +
                pageNumber;

            const result = $api.get(queryRoute);

            return result;
        } catch (error) {
            console.error("API get user error", error);
        }
    }
    static async searchUserRepos(userName: string, searchValue: string) {
        try {
            const queryParam = "?q="+searchValue;
            const searchInName = "+in:name";
            const searchByUser = "+user:" + userName;
            const addForkedRepos = "+fork:true";
            const resultPerPage = "&per_page=10";
            const pageNumber = "&page=1";
            const queryRoute =
                "/search/repositories" +
                queryParam +
                searchInName +
                searchByUser +
                addForkedRepos +
                resultPerPage +
                pageNumber;

            const result = $api.get(queryRoute);

            return result;
        } catch (error) {
            console.error("API get user error", error);
        }
    }
}

export default API;
