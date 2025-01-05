export default async () => {
  interface IUsers {
    id: number;
    name: string;
    email: string;
    phone: string;
  }
  const config = useRuntimeConfig();
  const userName = ref('');
  const isloaded = ref(false);

  const { data: users } = await useAsyncData('users', () =>
    $fetch(`${config.public.apiBase}users`)
  );

  if (users.value?.length > 0) {
    setTimeout(() => (isloaded.value = true), 1000);
  }
  const getUserName = (id) => {
    userName.value = users.value.filter((el: IUsers) => el.id === id)[0];
  };
  return { users, getUserName, userName, isloaded };
};
