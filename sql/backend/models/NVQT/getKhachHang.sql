SELECT [MaKH]
      ,[Ten]
      ,[Sdt]
      ,[SoNha]
      ,[Duong]
      ,[Phuong]
      ,[Quan]
      ,[ThanhPho]
      ,[Email]
      ,[MatKhau]
      ,[GioiTinh]
      ,[NgaySinh]
      ,[TikiXu]
  FROM [Tiki].[dbo].[KhachHang] WHERE [MaKH] BETWEEN (@page - 1)*10 AND @page*10 - 1;