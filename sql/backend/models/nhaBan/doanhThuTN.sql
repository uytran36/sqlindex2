select sp.MaSP, sp.TenSP, cthd.SoLuong, cthd.ThanhTien as dttn
from SanPham as sp
INNER JOIN CT_HoaDon as cthd ON sp.MaSP = cthd.MaSP
JOIN HoaDon as hd ON cthd.MaHD = hd.MaHD
where sp.MaNhaBan = @MaNhaBan
AND CAST(hd.NgayGiaoTC as DATE) = @NgayGiaoTC AND hd.TinhTrang like N'Đã giao hàng' 