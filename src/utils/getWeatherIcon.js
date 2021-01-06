const getWeatherIcon = (name) => {
  const weatherStates = {
    sn: '',
    sl: '',
    h: '',
    t: '',
    hr: '',
    lr: '',
    s: '',
    hc: '',
    lc: '',
    c: '',
  };
  return weatherStates[name];
};

export default getWeatherIcon;
