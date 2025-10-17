export default function mergeData(initialData, newMoods, newUsers) {
  // Merge moods
  const moodMap = new Map();
  initialData.data.moods.forEach((mood) => {
    moodMap.set(mood._id, mood);
  });
  newMoods.moods?.forEach((mood) => {
    moodMap.set(mood._id, { ...moodMap.get(mood._id), ...mood });
  });

  // Merge totalUsers
  const mergedTotalUsers = {
    ...initialData.totalUsers,
    total: (initialData.totalUsers?.total || 0) + (newUsers || 0),
    status: newUsers.status || initialData.totalUsers?.status
  };

  return {
    ...initialData,
    totalMoods: Array.from(moodMap.values()),
    totalUsers: mergedTotalUsers
  };
}
