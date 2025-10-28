
export const CountdownSection = () => {
  // In a real app, you'd calculate the time remaining here.
  const time = { hours: '04', minutes: '28', seconds: '55' };

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-black text-white">{value}</span>
      <span className="text-sm font-medium text-white opacity-80">{label}</span>
    </div>
  );

  return (
    <section className="bg-green-600 p-4 text-center shadow-lg sticky top-0 z-20"> 
      <p className="text-sm text-white font-semibold mb-2">
        OFFER ENDS IN:
      </p>
      <div className="flex justify-center space-x-4">
        <TimeBlock value={time.hours} label="HRS" />
        <TimeBlock value={time.minutes} label="MIN" />
        <TimeBlock value={time.seconds} label="SEC" />
      </div>
    </section>
  );
};