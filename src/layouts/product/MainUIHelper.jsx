export const requestFormat = (data) => {
    return {
        code: data.code,
        name: data.name,
        quota: +data.quota,
        description: data.description,
        amount: +data.amount,
        cost_paid: +data.cost_paid,
        status: data.status ?? "non-active",
        sub_products: data.sub_products,
        facilities: data.facilities,
      }
}