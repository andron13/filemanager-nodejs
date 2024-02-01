import os from 'node:os';

/**
 * Retrieves and displays information about the host machine's CPUs.
 */
export const getCPUsInfo = () => {
  const cpus = os.cpus();
  const totalCPUs = cpus.length;
  const cpuInfo = [];

  cpus.forEach((cpu, index) => {
    const { model, speed } = cpu;
    const clockRateGHz = (speed / 1000).toFixed(2);

    const cpuData = {
      CPU: `CPU ${index + 1}`,
      Model: model,
      'Clock Rate (GHz)': `${clockRateGHz} GHz`,
    };

    cpuInfo.push(cpuData);
  });

  console.log(`Overall amount of CPUs: ${totalCPUs}\n`);
  console.table(cpuInfo);
};
