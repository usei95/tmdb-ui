export default function viewName(viewFile) {
  return () => import("@/views/" + viewFile + ".vue");
}
