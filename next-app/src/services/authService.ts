interface IFormInput {
  username: string;
  password: string;
}

export const loginUser = async (data: IFormInput) => {
  const response = await fetch('/next-app/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
