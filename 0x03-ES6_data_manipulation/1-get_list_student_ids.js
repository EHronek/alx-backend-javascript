export default function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  } else {
    return list.map((item) => item.id);
  }
}
