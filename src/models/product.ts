import { api } from "@/src/models/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useProducts = () =>
  useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await api.get("/products", {
        headers: {
          "Cache-Control": "no-cache",
        },
      });
      return res.data.data;
    },
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
  });


export const useProductAdd = () => {
  const queryClient = useQueryClient(); // 👈 qo'shamiz

  return useMutation({
    mutationFn: async (data: Record<string, any>) => {
      const res = await api.post(`/super-admin/admins/confirm`, data);
      return res.data;
    },
    onSuccess: () => {
      // ✅ jadvalni yangilaydi
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Add success");
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
      toast.error("Error adding information");
    }
  });
};