const mockResponse = {
  data: {
    results: [
      {
        name: { first: "Alex", last: "Chojn" },
        picture: { large: "https://randomuser.me/api/portraits/men/95.jpg" },
        login: { username: "TheGoat" },
      },
      {
        name: { first: "Alex", last: "Chojn" },
        picture: { large: "https://randomuser.me/api/portraits/men/95.jpg" },
        login: { username: "TheGoat" },
      },
      {
        name: { first: "Alex", last: "Chojn" },
        picture: { large: "https://randomuser.me/api/portraits/men/95.jpg" },
        login: { username: "TheGoat" },
      },
      {
        name: { first: "Alex", last: "Chojn" },
        picture: { large: "https://randomuser.me/api/portraits/men/95.jpg" },
        login: { username: "TheGoat" },
      },
      {
        name: { first: "Alex", last: "Chojn" },
        picture: { large: "https://randomuser.me/api/portraits/men/95.jpg" },
        login: { username: "TheGoat" },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
