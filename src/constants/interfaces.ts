export interface UserItemInterface {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    score: number;
    detailed_data?: DetailedUserDataInterface
}

export interface DetailedUserDataInterface {
    avatar_url: string;
    bio: string | null;
    blog: string;
    company: string | null;
    created_at: string;
    email: string | null;
    events_url: string;
    followers: number;
    followers_url: string;
    following: number;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    hireable: string | null;
    html_url: string;
    id: number;
    location: string | null;
    login: string;
    name: string | null;
    node_id: string;
    organizations_url: string;
    public_gists: number;
    public_repos: number;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    twitter_username: string | null;
    type: string;
    updated_at: string;
    url: string;
}