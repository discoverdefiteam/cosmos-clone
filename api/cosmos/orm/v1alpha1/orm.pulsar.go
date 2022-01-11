package ormv1alpha1

import (
	fmt "fmt"
	runtime "github.com/cosmos/cosmos-proto/runtime"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoiface "google.golang.org/protobuf/runtime/protoiface"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	descriptorpb "google.golang.org/protobuf/types/descriptorpb"
	io "io"
	reflect "reflect"
	sync "sync"
)

var _ protoreflect.List = (*_TableDescriptor_2_list)(nil)

type _TableDescriptor_2_list struct {
	list *[]*SecondaryIndexDescriptor
}

func (x *_TableDescriptor_2_list) Len() int {
	if x.list == nil {
		return 0
	}
	return len(*x.list)
}

func (x *_TableDescriptor_2_list) Get(i int) protoreflect.Value {
	return protoreflect.ValueOfMessage((*x.list)[i].ProtoReflect())
}

func (x *_TableDescriptor_2_list) Set(i int, value protoreflect.Value) {
	valueUnwrapped := value.Message()
	concreteValue := valueUnwrapped.Interface().(*SecondaryIndexDescriptor)
	(*x.list)[i] = concreteValue
}

func (x *_TableDescriptor_2_list) Append(value protoreflect.Value) {
	valueUnwrapped := value.Message()
	concreteValue := valueUnwrapped.Interface().(*SecondaryIndexDescriptor)
	*x.list = append(*x.list, concreteValue)
}

func (x *_TableDescriptor_2_list) AppendMutable() protoreflect.Value {
	v := new(SecondaryIndexDescriptor)
	*x.list = append(*x.list, v)
	return protoreflect.ValueOfMessage(v.ProtoReflect())
}

func (x *_TableDescriptor_2_list) Truncate(n int) {
	for i := n; i < len(*x.list); i++ {
		(*x.list)[i] = nil
	}
	*x.list = (*x.list)[:n]
}

func (x *_TableDescriptor_2_list) NewElement() protoreflect.Value {
	v := new(SecondaryIndexDescriptor)
	return protoreflect.ValueOfMessage(v.ProtoReflect())
}

func (x *_TableDescriptor_2_list) IsValid() bool {
	return x.list != nil
}

var (
	md_TableDescriptor             protoreflect.MessageDescriptor
	fd_TableDescriptor_primary_key protoreflect.FieldDescriptor
	fd_TableDescriptor_index       protoreflect.FieldDescriptor
	fd_TableDescriptor_id          protoreflect.FieldDescriptor
)

func init() {
	file_cosmos_orm_v1alpha1_orm_proto_init()
	md_TableDescriptor = File_cosmos_orm_v1alpha1_orm_proto.Messages().ByName("TableDescriptor")
	fd_TableDescriptor_primary_key = md_TableDescriptor.Fields().ByName("primary_key")
	fd_TableDescriptor_index = md_TableDescriptor.Fields().ByName("index")
	fd_TableDescriptor_id = md_TableDescriptor.Fields().ByName("id")
}

var _ protoreflect.Message = (*fastReflection_TableDescriptor)(nil)

type fastReflection_TableDescriptor TableDescriptor

func (x *TableDescriptor) ProtoReflect() protoreflect.Message {
	return (*fastReflection_TableDescriptor)(x)
}

func (x *TableDescriptor) slowProtoReflect() protoreflect.Message {
	mi := &file_cosmos_orm_v1alpha1_orm_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

var _fastReflection_TableDescriptor_messageType fastReflection_TableDescriptor_messageType
var _ protoreflect.MessageType = fastReflection_TableDescriptor_messageType{}

type fastReflection_TableDescriptor_messageType struct{}

func (x fastReflection_TableDescriptor_messageType) Zero() protoreflect.Message {
	return (*fastReflection_TableDescriptor)(nil)
}
func (x fastReflection_TableDescriptor_messageType) New() protoreflect.Message {
	return new(fastReflection_TableDescriptor)
}
func (x fastReflection_TableDescriptor_messageType) Descriptor() protoreflect.MessageDescriptor {
	return md_TableDescriptor
}

// Descriptor returns message descriptor, which contains only the protobuf
// type information for the message.
func (x *fastReflection_TableDescriptor) Descriptor() protoreflect.MessageDescriptor {
	return md_TableDescriptor
}

// Type returns the message type, which encapsulates both Go and protobuf
// type information. If the Go type information is not needed,
// it is recommended that the message descriptor be used instead.
func (x *fastReflection_TableDescriptor) Type() protoreflect.MessageType {
	return _fastReflection_TableDescriptor_messageType
}

// New returns a newly allocated and mutable empty message.
func (x *fastReflection_TableDescriptor) New() protoreflect.Message {
	return new(fastReflection_TableDescriptor)
}

// Interface unwraps the message reflection interface and
// returns the underlying ProtoMessage interface.
func (x *fastReflection_TableDescriptor) Interface() protoreflect.ProtoMessage {
	return (*TableDescriptor)(x)
}

// Range iterates over every populated field in an undefined order,
// calling f for each field descriptor and value encountered.
// Range returns immediately if f returns false.
// While iterating, mutating operations may only be performed
// on the current field descriptor.
func (x *fastReflection_TableDescriptor) Range(f func(protoreflect.FieldDescriptor, protoreflect.Value) bool) {
	if x.PrimaryKey != nil {
		value := protoreflect.ValueOfMessage(x.PrimaryKey.ProtoReflect())
		if !f(fd_TableDescriptor_primary_key, value) {
			return
		}
	}
	if len(x.Index) != 0 {
		value := protoreflect.ValueOfList(&_TableDescriptor_2_list{list: &x.Index})
		if !f(fd_TableDescriptor_index, value) {
			return
		}
	}
	if x.Id != uint32(0) {
		value := protoreflect.ValueOfUint32(x.Id)
		if !f(fd_TableDescriptor_id, value) {
			return
		}
	}
}

// Has reports whether a field is populated.
//
// Some fields have the property of nullability where it is possible to
// distinguish between the default value of a field and whether the field
// was explicitly populated with the default value. Singular message fields,
// member fields of a oneof, and proto2 scalar fields are nullable. Such
// fields are populated only if explicitly set.
//
// In other cases (aside from the nullable cases above),
// a proto3 scalar field is populated if it contains a non-zero value, and
// a repeated field is populated if it is non-empty.
func (x *fastReflection_TableDescriptor) Has(fd protoreflect.FieldDescriptor) bool {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.TableDescriptor.primary_key":
		return x.PrimaryKey != nil
	case "cosmos.orm.v1alpha1.TableDescriptor.index":
		return len(x.Index) != 0
	case "cosmos.orm.v1alpha1.TableDescriptor.id":
		return x.Id != uint32(0)
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.TableDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.TableDescriptor does not contain field %s", fd.FullName()))
	}
}

// Clear clears the field such that a subsequent Has call reports false.
//
// Clearing an extension field clears both the extension type and value
// associated with the given field number.
//
// Clear is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_TableDescriptor) Clear(fd protoreflect.FieldDescriptor) {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.TableDescriptor.primary_key":
		x.PrimaryKey = nil
	case "cosmos.orm.v1alpha1.TableDescriptor.index":
		x.Index = nil
	case "cosmos.orm.v1alpha1.TableDescriptor.id":
		x.Id = uint32(0)
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.TableDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.TableDescriptor does not contain field %s", fd.FullName()))
	}
}

// Get retrieves the value for a field.
//
// For unpopulated scalars, it returns the default value, where
// the default value of a bytes scalar is guaranteed to be a copy.
// For unpopulated composite types, it returns an empty, read-only view
// of the value; to obtain a mutable reference, use Mutable.
func (x *fastReflection_TableDescriptor) Get(descriptor protoreflect.FieldDescriptor) protoreflect.Value {
	switch descriptor.FullName() {
	case "cosmos.orm.v1alpha1.TableDescriptor.primary_key":
		value := x.PrimaryKey
		return protoreflect.ValueOfMessage(value.ProtoReflect())
	case "cosmos.orm.v1alpha1.TableDescriptor.index":
		if len(x.Index) == 0 {
			return protoreflect.ValueOfList(&_TableDescriptor_2_list{})
		}
		listValue := &_TableDescriptor_2_list{list: &x.Index}
		return protoreflect.ValueOfList(listValue)
	case "cosmos.orm.v1alpha1.TableDescriptor.id":
		value := x.Id
		return protoreflect.ValueOfUint32(value)
	default:
		if descriptor.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.TableDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.TableDescriptor does not contain field %s", descriptor.FullName()))
	}
}

// Set stores the value for a field.
//
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType.
// When setting a composite type, it is unspecified whether the stored value
// aliases the source's memory in any way. If the composite value is an
// empty, read-only value, then it panics.
//
// Set is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_TableDescriptor) Set(fd protoreflect.FieldDescriptor, value protoreflect.Value) {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.TableDescriptor.primary_key":
		x.PrimaryKey = value.Message().Interface().(*PrimaryKeyDescriptor)
	case "cosmos.orm.v1alpha1.TableDescriptor.index":
		lv := value.List()
		clv := lv.(*_TableDescriptor_2_list)
		x.Index = *clv.list
	case "cosmos.orm.v1alpha1.TableDescriptor.id":
		x.Id = uint32(value.Uint())
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.TableDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.TableDescriptor does not contain field %s", fd.FullName()))
	}
}

// Mutable returns a mutable reference to a composite type.
//
// If the field is unpopulated, it may allocate a composite value.
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType
// if not already stored.
// It panics if the field does not contain a composite type.
//
// Mutable is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_TableDescriptor) Mutable(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.TableDescriptor.primary_key":
		if x.PrimaryKey == nil {
			x.PrimaryKey = new(PrimaryKeyDescriptor)
		}
		return protoreflect.ValueOfMessage(x.PrimaryKey.ProtoReflect())
	case "cosmos.orm.v1alpha1.TableDescriptor.index":
		if x.Index == nil {
			x.Index = []*SecondaryIndexDescriptor{}
		}
		value := &_TableDescriptor_2_list{list: &x.Index}
		return protoreflect.ValueOfList(value)
	case "cosmos.orm.v1alpha1.TableDescriptor.id":
		panic(fmt.Errorf("field id of message cosmos.orm.v1alpha1.TableDescriptor is not mutable"))
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.TableDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.TableDescriptor does not contain field %s", fd.FullName()))
	}
}

// NewField returns a new value that is assignable to the field
// for the given descriptor. For scalars, this returns the default value.
// For lists, maps, and messages, this returns a new, empty, mutable value.
func (x *fastReflection_TableDescriptor) NewField(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.TableDescriptor.primary_key":
		m := new(PrimaryKeyDescriptor)
		return protoreflect.ValueOfMessage(m.ProtoReflect())
	case "cosmos.orm.v1alpha1.TableDescriptor.index":
		list := []*SecondaryIndexDescriptor{}
		return protoreflect.ValueOfList(&_TableDescriptor_2_list{list: &list})
	case "cosmos.orm.v1alpha1.TableDescriptor.id":
		return protoreflect.ValueOfUint32(uint32(0))
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.TableDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.TableDescriptor does not contain field %s", fd.FullName()))
	}
}

// WhichOneof reports which field within the oneof is populated,
// returning nil if none are populated.
// It panics if the oneof descriptor does not belong to this message.
func (x *fastReflection_TableDescriptor) WhichOneof(d protoreflect.OneofDescriptor) protoreflect.FieldDescriptor {
	switch d.FullName() {
	default:
		panic(fmt.Errorf("%s is not a oneof field in cosmos.orm.v1alpha1.TableDescriptor", d.FullName()))
	}
	panic("unreachable")
}

// GetUnknown retrieves the entire list of unknown fields.
// The caller may only mutate the contents of the RawFields
// if the mutated bytes are stored back into the message with SetUnknown.
func (x *fastReflection_TableDescriptor) GetUnknown() protoreflect.RawFields {
	return x.unknownFields
}

// SetUnknown stores an entire list of unknown fields.
// The raw fields must be syntactically valid according to the wire format.
// An implementation may panic if this is not the case.
// Once stored, the caller must not mutate the content of the RawFields.
// An empty RawFields may be passed to clear the fields.
//
// SetUnknown is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_TableDescriptor) SetUnknown(fields protoreflect.RawFields) {
	x.unknownFields = fields
}

// IsValid reports whether the message is valid.
//
// An invalid message is an empty, read-only value.
//
// An invalid message often corresponds to a nil pointer of the concrete
// message type, but the details are implementation dependent.
// Validity is not part of the protobuf data model, and may not
// be preserved in marshaling or other operations.
func (x *fastReflection_TableDescriptor) IsValid() bool {
	return x != nil
}

// ProtoMethods returns optional fastReflectionFeature-path implementations of various operations.
// This method may return nil.
//
// The returned methods type is identical to
// "google.golang.org/protobuf/runtime/protoiface".Methods.
// Consult the protoiface package documentation for details.
func (x *fastReflection_TableDescriptor) ProtoMethods() *protoiface.Methods {
	size := func(input protoiface.SizeInput) protoiface.SizeOutput {
		x := input.Message.Interface().(*TableDescriptor)
		if x == nil {
			return protoiface.SizeOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Size:              0,
			}
		}
		options := runtime.SizeInputToOptions(input)
		_ = options
		var n int
		var l int
		_ = l
		if x.PrimaryKey != nil {
			l = options.Size(x.PrimaryKey)
			n += 1 + l + runtime.Sov(uint64(l))
		}
		if len(x.Index) > 0 {
			for _, e := range x.Index {
				l = options.Size(e)
				n += 1 + l + runtime.Sov(uint64(l))
			}
		}
		if x.Id != 0 {
			n += 1 + runtime.Sov(uint64(x.Id))
		}
		if x.unknownFields != nil {
			n += len(x.unknownFields)
		}
		return protoiface.SizeOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Size:              n,
		}
	}

	marshal := func(input protoiface.MarshalInput) (protoiface.MarshalOutput, error) {
		x := input.Message.Interface().(*TableDescriptor)
		if x == nil {
			return protoiface.MarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Buf:               input.Buf,
			}, nil
		}
		options := runtime.MarshalInputToOptions(input)
		_ = options
		size := options.Size(x)
		dAtA := make([]byte, size)
		i := len(dAtA)
		_ = i
		var l int
		_ = l
		if x.unknownFields != nil {
			i -= len(x.unknownFields)
			copy(dAtA[i:], x.unknownFields)
		}
		if x.Id != 0 {
			i = runtime.EncodeVarint(dAtA, i, uint64(x.Id))
			i--
			dAtA[i] = 0x18
		}
		if len(x.Index) > 0 {
			for iNdEx := len(x.Index) - 1; iNdEx >= 0; iNdEx-- {
				encoded, err := options.Marshal(x.Index[iNdEx])
				if err != nil {
					return protoiface.MarshalOutput{
						NoUnkeyedLiterals: input.NoUnkeyedLiterals,
						Buf:               input.Buf,
					}, err
				}
				i -= len(encoded)
				copy(dAtA[i:], encoded)
				i = runtime.EncodeVarint(dAtA, i, uint64(len(encoded)))
				i--
				dAtA[i] = 0x12
			}
		}
		if x.PrimaryKey != nil {
			encoded, err := options.Marshal(x.PrimaryKey)
			if err != nil {
				return protoiface.MarshalOutput{
					NoUnkeyedLiterals: input.NoUnkeyedLiterals,
					Buf:               input.Buf,
				}, err
			}
			i -= len(encoded)
			copy(dAtA[i:], encoded)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(encoded)))
			i--
			dAtA[i] = 0xa
		}
		if input.Buf != nil {
			input.Buf = append(input.Buf, dAtA...)
		} else {
			input.Buf = dAtA
		}
		return protoiface.MarshalOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Buf:               input.Buf,
		}, nil
	}
	unmarshal := func(input protoiface.UnmarshalInput) (protoiface.UnmarshalOutput, error) {
		x := input.Message.Interface().(*TableDescriptor)
		if x == nil {
			return protoiface.UnmarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Flags:             input.Flags,
			}, nil
		}
		options := runtime.UnmarshalInputToOptions(input)
		_ = options
		dAtA := input.Buf
		l := len(dAtA)
		iNdEx := 0
		for iNdEx < l {
			preIndex := iNdEx
			var wire uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
				}
				if iNdEx >= l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				wire |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			fieldNum := int32(wire >> 3)
			wireType := int(wire & 0x7)
			if wireType == 4 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: TableDescriptor: wiretype end group for non-group")
			}
			if fieldNum <= 0 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: TableDescriptor: illegal tag %d (wire type %d)", fieldNum, wire)
			}
			switch fieldNum {
			case 1:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field PrimaryKey", wireType)
				}
				var msglen int
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					msglen |= int(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				if msglen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + msglen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				if x.PrimaryKey == nil {
					x.PrimaryKey = &PrimaryKeyDescriptor{}
				}
				if err := options.Unmarshal(dAtA[iNdEx:postIndex], x.PrimaryKey); err != nil {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, err
				}
				iNdEx = postIndex
			case 2:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
				}
				var msglen int
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					msglen |= int(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				if msglen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + msglen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.Index = append(x.Index, &SecondaryIndexDescriptor{})
				if err := options.Unmarshal(dAtA[iNdEx:postIndex], x.Index[len(x.Index)-1]); err != nil {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, err
				}
				iNdEx = postIndex
			case 3:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
				}
				x.Id = 0
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					x.Id |= uint32(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
			default:
				iNdEx = preIndex
				skippy, err := runtime.Skip(dAtA[iNdEx:])
				if err != nil {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, err
				}
				if (skippy < 0) || (iNdEx+skippy) < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if (iNdEx + skippy) > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				if !options.DiscardUnknown {
					x.unknownFields = append(x.unknownFields, dAtA[iNdEx:iNdEx+skippy]...)
				}
				iNdEx += skippy
			}
		}

		if iNdEx > l {
			return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
		}
		return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, nil
	}
	return &protoiface.Methods{
		NoUnkeyedLiterals: struct{}{},
		Flags:             protoiface.SupportMarshalDeterministic | protoiface.SupportUnmarshalDiscardUnknown,
		Size:              size,
		Marshal:           marshal,
		Unmarshal:         unmarshal,
		Merge:             nil,
		CheckInitialized:  nil,
	}
}

var (
	md_PrimaryKeyDescriptor                protoreflect.MessageDescriptor
	fd_PrimaryKeyDescriptor_fields         protoreflect.FieldDescriptor
	fd_PrimaryKeyDescriptor_auto_increment protoreflect.FieldDescriptor
	fd_PrimaryKeyDescriptor_references     protoreflect.FieldDescriptor
)

func init() {
	file_cosmos_orm_v1alpha1_orm_proto_init()
	md_PrimaryKeyDescriptor = File_cosmos_orm_v1alpha1_orm_proto.Messages().ByName("PrimaryKeyDescriptor")
	fd_PrimaryKeyDescriptor_fields = md_PrimaryKeyDescriptor.Fields().ByName("fields")
	fd_PrimaryKeyDescriptor_auto_increment = md_PrimaryKeyDescriptor.Fields().ByName("auto_increment")
	fd_PrimaryKeyDescriptor_references = md_PrimaryKeyDescriptor.Fields().ByName("references")
}

var _ protoreflect.Message = (*fastReflection_PrimaryKeyDescriptor)(nil)

type fastReflection_PrimaryKeyDescriptor PrimaryKeyDescriptor

func (x *PrimaryKeyDescriptor) ProtoReflect() protoreflect.Message {
	return (*fastReflection_PrimaryKeyDescriptor)(x)
}

func (x *PrimaryKeyDescriptor) slowProtoReflect() protoreflect.Message {
	mi := &file_cosmos_orm_v1alpha1_orm_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

var _fastReflection_PrimaryKeyDescriptor_messageType fastReflection_PrimaryKeyDescriptor_messageType
var _ protoreflect.MessageType = fastReflection_PrimaryKeyDescriptor_messageType{}

type fastReflection_PrimaryKeyDescriptor_messageType struct{}

func (x fastReflection_PrimaryKeyDescriptor_messageType) Zero() protoreflect.Message {
	return (*fastReflection_PrimaryKeyDescriptor)(nil)
}
func (x fastReflection_PrimaryKeyDescriptor_messageType) New() protoreflect.Message {
	return new(fastReflection_PrimaryKeyDescriptor)
}
func (x fastReflection_PrimaryKeyDescriptor_messageType) Descriptor() protoreflect.MessageDescriptor {
	return md_PrimaryKeyDescriptor
}

// Descriptor returns message descriptor, which contains only the protobuf
// type information for the message.
func (x *fastReflection_PrimaryKeyDescriptor) Descriptor() protoreflect.MessageDescriptor {
	return md_PrimaryKeyDescriptor
}

// Type returns the message type, which encapsulates both Go and protobuf
// type information. If the Go type information is not needed,
// it is recommended that the message descriptor be used instead.
func (x *fastReflection_PrimaryKeyDescriptor) Type() protoreflect.MessageType {
	return _fastReflection_PrimaryKeyDescriptor_messageType
}

// New returns a newly allocated and mutable empty message.
func (x *fastReflection_PrimaryKeyDescriptor) New() protoreflect.Message {
	return new(fastReflection_PrimaryKeyDescriptor)
}

// Interface unwraps the message reflection interface and
// returns the underlying ProtoMessage interface.
func (x *fastReflection_PrimaryKeyDescriptor) Interface() protoreflect.ProtoMessage {
	return (*PrimaryKeyDescriptor)(x)
}

// Range iterates over every populated field in an undefined order,
// calling f for each field descriptor and value encountered.
// Range returns immediately if f returns false.
// While iterating, mutating operations may only be performed
// on the current field descriptor.
func (x *fastReflection_PrimaryKeyDescriptor) Range(f func(protoreflect.FieldDescriptor, protoreflect.Value) bool) {
	if x.Fields != "" {
		value := protoreflect.ValueOfString(x.Fields)
		if !f(fd_PrimaryKeyDescriptor_fields, value) {
			return
		}
	}
	if x.AutoIncrement != false {
		value := protoreflect.ValueOfBool(x.AutoIncrement)
		if !f(fd_PrimaryKeyDescriptor_auto_increment, value) {
			return
		}
	}
	if x.References != "" {
		value := protoreflect.ValueOfString(x.References)
		if !f(fd_PrimaryKeyDescriptor_references, value) {
			return
		}
	}
}

// Has reports whether a field is populated.
//
// Some fields have the property of nullability where it is possible to
// distinguish between the default value of a field and whether the field
// was explicitly populated with the default value. Singular message fields,
// member fields of a oneof, and proto2 scalar fields are nullable. Such
// fields are populated only if explicitly set.
//
// In other cases (aside from the nullable cases above),
// a proto3 scalar field is populated if it contains a non-zero value, and
// a repeated field is populated if it is non-empty.
func (x *fastReflection_PrimaryKeyDescriptor) Has(fd protoreflect.FieldDescriptor) bool {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.fields":
		return x.Fields != ""
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.auto_increment":
		return x.AutoIncrement != false
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.references":
		return x.References != ""
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.PrimaryKeyDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.PrimaryKeyDescriptor does not contain field %s", fd.FullName()))
	}
}

// Clear clears the field such that a subsequent Has call reports false.
//
// Clearing an extension field clears both the extension type and value
// associated with the given field number.
//
// Clear is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_PrimaryKeyDescriptor) Clear(fd protoreflect.FieldDescriptor) {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.fields":
		x.Fields = ""
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.auto_increment":
		x.AutoIncrement = false
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.references":
		x.References = ""
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.PrimaryKeyDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.PrimaryKeyDescriptor does not contain field %s", fd.FullName()))
	}
}

// Get retrieves the value for a field.
//
// For unpopulated scalars, it returns the default value, where
// the default value of a bytes scalar is guaranteed to be a copy.
// For unpopulated composite types, it returns an empty, read-only view
// of the value; to obtain a mutable reference, use Mutable.
func (x *fastReflection_PrimaryKeyDescriptor) Get(descriptor protoreflect.FieldDescriptor) protoreflect.Value {
	switch descriptor.FullName() {
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.fields":
		value := x.Fields
		return protoreflect.ValueOfString(value)
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.auto_increment":
		value := x.AutoIncrement
		return protoreflect.ValueOfBool(value)
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.references":
		value := x.References
		return protoreflect.ValueOfString(value)
	default:
		if descriptor.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.PrimaryKeyDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.PrimaryKeyDescriptor does not contain field %s", descriptor.FullName()))
	}
}

// Set stores the value for a field.
//
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType.
// When setting a composite type, it is unspecified whether the stored value
// aliases the source's memory in any way. If the composite value is an
// empty, read-only value, then it panics.
//
// Set is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_PrimaryKeyDescriptor) Set(fd protoreflect.FieldDescriptor, value protoreflect.Value) {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.fields":
		x.Fields = value.Interface().(string)
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.auto_increment":
		x.AutoIncrement = value.Bool()
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.references":
		x.References = value.Interface().(string)
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.PrimaryKeyDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.PrimaryKeyDescriptor does not contain field %s", fd.FullName()))
	}
}

// Mutable returns a mutable reference to a composite type.
//
// If the field is unpopulated, it may allocate a composite value.
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType
// if not already stored.
// It panics if the field does not contain a composite type.
//
// Mutable is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_PrimaryKeyDescriptor) Mutable(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.fields":
		panic(fmt.Errorf("field fields of message cosmos.orm.v1alpha1.PrimaryKeyDescriptor is not mutable"))
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.auto_increment":
		panic(fmt.Errorf("field auto_increment of message cosmos.orm.v1alpha1.PrimaryKeyDescriptor is not mutable"))
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.references":
		panic(fmt.Errorf("field references of message cosmos.orm.v1alpha1.PrimaryKeyDescriptor is not mutable"))
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.PrimaryKeyDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.PrimaryKeyDescriptor does not contain field %s", fd.FullName()))
	}
}

// NewField returns a new value that is assignable to the field
// for the given descriptor. For scalars, this returns the default value.
// For lists, maps, and messages, this returns a new, empty, mutable value.
func (x *fastReflection_PrimaryKeyDescriptor) NewField(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.fields":
		return protoreflect.ValueOfString("")
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.auto_increment":
		return protoreflect.ValueOfBool(false)
	case "cosmos.orm.v1alpha1.PrimaryKeyDescriptor.references":
		return protoreflect.ValueOfString("")
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.PrimaryKeyDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.PrimaryKeyDescriptor does not contain field %s", fd.FullName()))
	}
}

// WhichOneof reports which field within the oneof is populated,
// returning nil if none are populated.
// It panics if the oneof descriptor does not belong to this message.
func (x *fastReflection_PrimaryKeyDescriptor) WhichOneof(d protoreflect.OneofDescriptor) protoreflect.FieldDescriptor {
	switch d.FullName() {
	default:
		panic(fmt.Errorf("%s is not a oneof field in cosmos.orm.v1alpha1.PrimaryKeyDescriptor", d.FullName()))
	}
	panic("unreachable")
}

// GetUnknown retrieves the entire list of unknown fields.
// The caller may only mutate the contents of the RawFields
// if the mutated bytes are stored back into the message with SetUnknown.
func (x *fastReflection_PrimaryKeyDescriptor) GetUnknown() protoreflect.RawFields {
	return x.unknownFields
}

// SetUnknown stores an entire list of unknown fields.
// The raw fields must be syntactically valid according to the wire format.
// An implementation may panic if this is not the case.
// Once stored, the caller must not mutate the content of the RawFields.
// An empty RawFields may be passed to clear the fields.
//
// SetUnknown is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_PrimaryKeyDescriptor) SetUnknown(fields protoreflect.RawFields) {
	x.unknownFields = fields
}

// IsValid reports whether the message is valid.
//
// An invalid message is an empty, read-only value.
//
// An invalid message often corresponds to a nil pointer of the concrete
// message type, but the details are implementation dependent.
// Validity is not part of the protobuf data model, and may not
// be preserved in marshaling or other operations.
func (x *fastReflection_PrimaryKeyDescriptor) IsValid() bool {
	return x != nil
}

// ProtoMethods returns optional fastReflectionFeature-path implementations of various operations.
// This method may return nil.
//
// The returned methods type is identical to
// "google.golang.org/protobuf/runtime/protoiface".Methods.
// Consult the protoiface package documentation for details.
func (x *fastReflection_PrimaryKeyDescriptor) ProtoMethods() *protoiface.Methods {
	size := func(input protoiface.SizeInput) protoiface.SizeOutput {
		x := input.Message.Interface().(*PrimaryKeyDescriptor)
		if x == nil {
			return protoiface.SizeOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Size:              0,
			}
		}
		options := runtime.SizeInputToOptions(input)
		_ = options
		var n int
		var l int
		_ = l
		l = len(x.Fields)
		if l > 0 {
			n += 1 + l + runtime.Sov(uint64(l))
		}
		if x.AutoIncrement {
			n += 2
		}
		l = len(x.References)
		if l > 0 {
			n += 1 + l + runtime.Sov(uint64(l))
		}
		if x.unknownFields != nil {
			n += len(x.unknownFields)
		}
		return protoiface.SizeOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Size:              n,
		}
	}

	marshal := func(input protoiface.MarshalInput) (protoiface.MarshalOutput, error) {
		x := input.Message.Interface().(*PrimaryKeyDescriptor)
		if x == nil {
			return protoiface.MarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Buf:               input.Buf,
			}, nil
		}
		options := runtime.MarshalInputToOptions(input)
		_ = options
		size := options.Size(x)
		dAtA := make([]byte, size)
		i := len(dAtA)
		_ = i
		var l int
		_ = l
		if x.unknownFields != nil {
			i -= len(x.unknownFields)
			copy(dAtA[i:], x.unknownFields)
		}
		if len(x.References) > 0 {
			i -= len(x.References)
			copy(dAtA[i:], x.References)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(x.References)))
			i--
			dAtA[i] = 0x1a
		}
		if x.AutoIncrement {
			i--
			if x.AutoIncrement {
				dAtA[i] = 1
			} else {
				dAtA[i] = 0
			}
			i--
			dAtA[i] = 0x10
		}
		if len(x.Fields) > 0 {
			i -= len(x.Fields)
			copy(dAtA[i:], x.Fields)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(x.Fields)))
			i--
			dAtA[i] = 0xa
		}
		if input.Buf != nil {
			input.Buf = append(input.Buf, dAtA...)
		} else {
			input.Buf = dAtA
		}
		return protoiface.MarshalOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Buf:               input.Buf,
		}, nil
	}
	unmarshal := func(input protoiface.UnmarshalInput) (protoiface.UnmarshalOutput, error) {
		x := input.Message.Interface().(*PrimaryKeyDescriptor)
		if x == nil {
			return protoiface.UnmarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Flags:             input.Flags,
			}, nil
		}
		options := runtime.UnmarshalInputToOptions(input)
		_ = options
		dAtA := input.Buf
		l := len(dAtA)
		iNdEx := 0
		for iNdEx < l {
			preIndex := iNdEx
			var wire uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
				}
				if iNdEx >= l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				wire |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			fieldNum := int32(wire >> 3)
			wireType := int(wire & 0x7)
			if wireType == 4 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: PrimaryKeyDescriptor: wiretype end group for non-group")
			}
			if fieldNum <= 0 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: PrimaryKeyDescriptor: illegal tag %d (wire type %d)", fieldNum, wire)
			}
			switch fieldNum {
			case 1:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Fields", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.Fields = string(dAtA[iNdEx:postIndex])
				iNdEx = postIndex
			case 2:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field AutoIncrement", wireType)
				}
				var v int
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					v |= int(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				x.AutoIncrement = bool(v != 0)
			case 3:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field References", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.References = string(dAtA[iNdEx:postIndex])
				iNdEx = postIndex
			default:
				iNdEx = preIndex
				skippy, err := runtime.Skip(dAtA[iNdEx:])
				if err != nil {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, err
				}
				if (skippy < 0) || (iNdEx+skippy) < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if (iNdEx + skippy) > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				if !options.DiscardUnknown {
					x.unknownFields = append(x.unknownFields, dAtA[iNdEx:iNdEx+skippy]...)
				}
				iNdEx += skippy
			}
		}

		if iNdEx > l {
			return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
		}
		return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, nil
	}
	return &protoiface.Methods{
		NoUnkeyedLiterals: struct{}{},
		Flags:             protoiface.SupportMarshalDeterministic | protoiface.SupportUnmarshalDiscardUnknown,
		Size:              size,
		Marshal:           marshal,
		Unmarshal:         unmarshal,
		Merge:             nil,
		CheckInitialized:  nil,
	}
}

var (
	md_SecondaryIndexDescriptor            protoreflect.MessageDescriptor
	fd_SecondaryIndexDescriptor_fields     protoreflect.FieldDescriptor
	fd_SecondaryIndexDescriptor_id         protoreflect.FieldDescriptor
	fd_SecondaryIndexDescriptor_unique     protoreflect.FieldDescriptor
	fd_SecondaryIndexDescriptor_references protoreflect.FieldDescriptor
)

func init() {
	file_cosmos_orm_v1alpha1_orm_proto_init()
	md_SecondaryIndexDescriptor = File_cosmos_orm_v1alpha1_orm_proto.Messages().ByName("SecondaryIndexDescriptor")
	fd_SecondaryIndexDescriptor_fields = md_SecondaryIndexDescriptor.Fields().ByName("fields")
	fd_SecondaryIndexDescriptor_id = md_SecondaryIndexDescriptor.Fields().ByName("id")
	fd_SecondaryIndexDescriptor_unique = md_SecondaryIndexDescriptor.Fields().ByName("unique")
	fd_SecondaryIndexDescriptor_references = md_SecondaryIndexDescriptor.Fields().ByName("references")
}

var _ protoreflect.Message = (*fastReflection_SecondaryIndexDescriptor)(nil)

type fastReflection_SecondaryIndexDescriptor SecondaryIndexDescriptor

func (x *SecondaryIndexDescriptor) ProtoReflect() protoreflect.Message {
	return (*fastReflection_SecondaryIndexDescriptor)(x)
}

func (x *SecondaryIndexDescriptor) slowProtoReflect() protoreflect.Message {
	mi := &file_cosmos_orm_v1alpha1_orm_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

var _fastReflection_SecondaryIndexDescriptor_messageType fastReflection_SecondaryIndexDescriptor_messageType
var _ protoreflect.MessageType = fastReflection_SecondaryIndexDescriptor_messageType{}

type fastReflection_SecondaryIndexDescriptor_messageType struct{}

func (x fastReflection_SecondaryIndexDescriptor_messageType) Zero() protoreflect.Message {
	return (*fastReflection_SecondaryIndexDescriptor)(nil)
}
func (x fastReflection_SecondaryIndexDescriptor_messageType) New() protoreflect.Message {
	return new(fastReflection_SecondaryIndexDescriptor)
}
func (x fastReflection_SecondaryIndexDescriptor_messageType) Descriptor() protoreflect.MessageDescriptor {
	return md_SecondaryIndexDescriptor
}

// Descriptor returns message descriptor, which contains only the protobuf
// type information for the message.
func (x *fastReflection_SecondaryIndexDescriptor) Descriptor() protoreflect.MessageDescriptor {
	return md_SecondaryIndexDescriptor
}

// Type returns the message type, which encapsulates both Go and protobuf
// type information. If the Go type information is not needed,
// it is recommended that the message descriptor be used instead.
func (x *fastReflection_SecondaryIndexDescriptor) Type() protoreflect.MessageType {
	return _fastReflection_SecondaryIndexDescriptor_messageType
}

// New returns a newly allocated and mutable empty message.
func (x *fastReflection_SecondaryIndexDescriptor) New() protoreflect.Message {
	return new(fastReflection_SecondaryIndexDescriptor)
}

// Interface unwraps the message reflection interface and
// returns the underlying ProtoMessage interface.
func (x *fastReflection_SecondaryIndexDescriptor) Interface() protoreflect.ProtoMessage {
	return (*SecondaryIndexDescriptor)(x)
}

// Range iterates over every populated field in an undefined order,
// calling f for each field descriptor and value encountered.
// Range returns immediately if f returns false.
// While iterating, mutating operations may only be performed
// on the current field descriptor.
func (x *fastReflection_SecondaryIndexDescriptor) Range(f func(protoreflect.FieldDescriptor, protoreflect.Value) bool) {
	if x.Fields != "" {
		value := protoreflect.ValueOfString(x.Fields)
		if !f(fd_SecondaryIndexDescriptor_fields, value) {
			return
		}
	}
	if x.Id != uint32(0) {
		value := protoreflect.ValueOfUint32(x.Id)
		if !f(fd_SecondaryIndexDescriptor_id, value) {
			return
		}
	}
	if x.Unique != false {
		value := protoreflect.ValueOfBool(x.Unique)
		if !f(fd_SecondaryIndexDescriptor_unique, value) {
			return
		}
	}
	if x.References != "" {
		value := protoreflect.ValueOfString(x.References)
		if !f(fd_SecondaryIndexDescriptor_references, value) {
			return
		}
	}
}

// Has reports whether a field is populated.
//
// Some fields have the property of nullability where it is possible to
// distinguish between the default value of a field and whether the field
// was explicitly populated with the default value. Singular message fields,
// member fields of a oneof, and proto2 scalar fields are nullable. Such
// fields are populated only if explicitly set.
//
// In other cases (aside from the nullable cases above),
// a proto3 scalar field is populated if it contains a non-zero value, and
// a repeated field is populated if it is non-empty.
func (x *fastReflection_SecondaryIndexDescriptor) Has(fd protoreflect.FieldDescriptor) bool {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.fields":
		return x.Fields != ""
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.id":
		return x.Id != uint32(0)
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.unique":
		return x.Unique != false
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.references":
		return x.References != ""
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.SecondaryIndexDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.SecondaryIndexDescriptor does not contain field %s", fd.FullName()))
	}
}

// Clear clears the field such that a subsequent Has call reports false.
//
// Clearing an extension field clears both the extension type and value
// associated with the given field number.
//
// Clear is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_SecondaryIndexDescriptor) Clear(fd protoreflect.FieldDescriptor) {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.fields":
		x.Fields = ""
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.id":
		x.Id = uint32(0)
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.unique":
		x.Unique = false
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.references":
		x.References = ""
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.SecondaryIndexDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.SecondaryIndexDescriptor does not contain field %s", fd.FullName()))
	}
}

// Get retrieves the value for a field.
//
// For unpopulated scalars, it returns the default value, where
// the default value of a bytes scalar is guaranteed to be a copy.
// For unpopulated composite types, it returns an empty, read-only view
// of the value; to obtain a mutable reference, use Mutable.
func (x *fastReflection_SecondaryIndexDescriptor) Get(descriptor protoreflect.FieldDescriptor) protoreflect.Value {
	switch descriptor.FullName() {
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.fields":
		value := x.Fields
		return protoreflect.ValueOfString(value)
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.id":
		value := x.Id
		return protoreflect.ValueOfUint32(value)
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.unique":
		value := x.Unique
		return protoreflect.ValueOfBool(value)
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.references":
		value := x.References
		return protoreflect.ValueOfString(value)
	default:
		if descriptor.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.SecondaryIndexDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.SecondaryIndexDescriptor does not contain field %s", descriptor.FullName()))
	}
}

// Set stores the value for a field.
//
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType.
// When setting a composite type, it is unspecified whether the stored value
// aliases the source's memory in any way. If the composite value is an
// empty, read-only value, then it panics.
//
// Set is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_SecondaryIndexDescriptor) Set(fd protoreflect.FieldDescriptor, value protoreflect.Value) {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.fields":
		x.Fields = value.Interface().(string)
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.id":
		x.Id = uint32(value.Uint())
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.unique":
		x.Unique = value.Bool()
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.references":
		x.References = value.Interface().(string)
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.SecondaryIndexDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.SecondaryIndexDescriptor does not contain field %s", fd.FullName()))
	}
}

// Mutable returns a mutable reference to a composite type.
//
// If the field is unpopulated, it may allocate a composite value.
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType
// if not already stored.
// It panics if the field does not contain a composite type.
//
// Mutable is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_SecondaryIndexDescriptor) Mutable(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.fields":
		panic(fmt.Errorf("field fields of message cosmos.orm.v1alpha1.SecondaryIndexDescriptor is not mutable"))
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.id":
		panic(fmt.Errorf("field id of message cosmos.orm.v1alpha1.SecondaryIndexDescriptor is not mutable"))
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.unique":
		panic(fmt.Errorf("field unique of message cosmos.orm.v1alpha1.SecondaryIndexDescriptor is not mutable"))
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.references":
		panic(fmt.Errorf("field references of message cosmos.orm.v1alpha1.SecondaryIndexDescriptor is not mutable"))
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.SecondaryIndexDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.SecondaryIndexDescriptor does not contain field %s", fd.FullName()))
	}
}

// NewField returns a new value that is assignable to the field
// for the given descriptor. For scalars, this returns the default value.
// For lists, maps, and messages, this returns a new, empty, mutable value.
func (x *fastReflection_SecondaryIndexDescriptor) NewField(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.fields":
		return protoreflect.ValueOfString("")
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.id":
		return protoreflect.ValueOfUint32(uint32(0))
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.unique":
		return protoreflect.ValueOfBool(false)
	case "cosmos.orm.v1alpha1.SecondaryIndexDescriptor.references":
		return protoreflect.ValueOfString("")
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.SecondaryIndexDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.SecondaryIndexDescriptor does not contain field %s", fd.FullName()))
	}
}

// WhichOneof reports which field within the oneof is populated,
// returning nil if none are populated.
// It panics if the oneof descriptor does not belong to this message.
func (x *fastReflection_SecondaryIndexDescriptor) WhichOneof(d protoreflect.OneofDescriptor) protoreflect.FieldDescriptor {
	switch d.FullName() {
	default:
		panic(fmt.Errorf("%s is not a oneof field in cosmos.orm.v1alpha1.SecondaryIndexDescriptor", d.FullName()))
	}
	panic("unreachable")
}

// GetUnknown retrieves the entire list of unknown fields.
// The caller may only mutate the contents of the RawFields
// if the mutated bytes are stored back into the message with SetUnknown.
func (x *fastReflection_SecondaryIndexDescriptor) GetUnknown() protoreflect.RawFields {
	return x.unknownFields
}

// SetUnknown stores an entire list of unknown fields.
// The raw fields must be syntactically valid according to the wire format.
// An implementation may panic if this is not the case.
// Once stored, the caller must not mutate the content of the RawFields.
// An empty RawFields may be passed to clear the fields.
//
// SetUnknown is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_SecondaryIndexDescriptor) SetUnknown(fields protoreflect.RawFields) {
	x.unknownFields = fields
}

// IsValid reports whether the message is valid.
//
// An invalid message is an empty, read-only value.
//
// An invalid message often corresponds to a nil pointer of the concrete
// message type, but the details are implementation dependent.
// Validity is not part of the protobuf data model, and may not
// be preserved in marshaling or other operations.
func (x *fastReflection_SecondaryIndexDescriptor) IsValid() bool {
	return x != nil
}

// ProtoMethods returns optional fastReflectionFeature-path implementations of various operations.
// This method may return nil.
//
// The returned methods type is identical to
// "google.golang.org/protobuf/runtime/protoiface".Methods.
// Consult the protoiface package documentation for details.
func (x *fastReflection_SecondaryIndexDescriptor) ProtoMethods() *protoiface.Methods {
	size := func(input protoiface.SizeInput) protoiface.SizeOutput {
		x := input.Message.Interface().(*SecondaryIndexDescriptor)
		if x == nil {
			return protoiface.SizeOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Size:              0,
			}
		}
		options := runtime.SizeInputToOptions(input)
		_ = options
		var n int
		var l int
		_ = l
		l = len(x.Fields)
		if l > 0 {
			n += 1 + l + runtime.Sov(uint64(l))
		}
		if x.Id != 0 {
			n += 1 + runtime.Sov(uint64(x.Id))
		}
		if x.Unique {
			n += 2
		}
		l = len(x.References)
		if l > 0 {
			n += 1 + l + runtime.Sov(uint64(l))
		}
		if x.unknownFields != nil {
			n += len(x.unknownFields)
		}
		return protoiface.SizeOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Size:              n,
		}
	}

	marshal := func(input protoiface.MarshalInput) (protoiface.MarshalOutput, error) {
		x := input.Message.Interface().(*SecondaryIndexDescriptor)
		if x == nil {
			return protoiface.MarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Buf:               input.Buf,
			}, nil
		}
		options := runtime.MarshalInputToOptions(input)
		_ = options
		size := options.Size(x)
		dAtA := make([]byte, size)
		i := len(dAtA)
		_ = i
		var l int
		_ = l
		if x.unknownFields != nil {
			i -= len(x.unknownFields)
			copy(dAtA[i:], x.unknownFields)
		}
		if len(x.References) > 0 {
			i -= len(x.References)
			copy(dAtA[i:], x.References)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(x.References)))
			i--
			dAtA[i] = 0x22
		}
		if x.Unique {
			i--
			if x.Unique {
				dAtA[i] = 1
			} else {
				dAtA[i] = 0
			}
			i--
			dAtA[i] = 0x18
		}
		if x.Id != 0 {
			i = runtime.EncodeVarint(dAtA, i, uint64(x.Id))
			i--
			dAtA[i] = 0x10
		}
		if len(x.Fields) > 0 {
			i -= len(x.Fields)
			copy(dAtA[i:], x.Fields)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(x.Fields)))
			i--
			dAtA[i] = 0xa
		}
		if input.Buf != nil {
			input.Buf = append(input.Buf, dAtA...)
		} else {
			input.Buf = dAtA
		}
		return protoiface.MarshalOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Buf:               input.Buf,
		}, nil
	}
	unmarshal := func(input protoiface.UnmarshalInput) (protoiface.UnmarshalOutput, error) {
		x := input.Message.Interface().(*SecondaryIndexDescriptor)
		if x == nil {
			return protoiface.UnmarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Flags:             input.Flags,
			}, nil
		}
		options := runtime.UnmarshalInputToOptions(input)
		_ = options
		dAtA := input.Buf
		l := len(dAtA)
		iNdEx := 0
		for iNdEx < l {
			preIndex := iNdEx
			var wire uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
				}
				if iNdEx >= l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				wire |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			fieldNum := int32(wire >> 3)
			wireType := int(wire & 0x7)
			if wireType == 4 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: SecondaryIndexDescriptor: wiretype end group for non-group")
			}
			if fieldNum <= 0 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: SecondaryIndexDescriptor: illegal tag %d (wire type %d)", fieldNum, wire)
			}
			switch fieldNum {
			case 1:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Fields", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.Fields = string(dAtA[iNdEx:postIndex])
				iNdEx = postIndex
			case 2:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
				}
				x.Id = 0
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					x.Id |= uint32(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
			case 3:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Unique", wireType)
				}
				var v int
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					v |= int(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				x.Unique = bool(v != 0)
			case 4:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field References", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.References = string(dAtA[iNdEx:postIndex])
				iNdEx = postIndex
			default:
				iNdEx = preIndex
				skippy, err := runtime.Skip(dAtA[iNdEx:])
				if err != nil {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, err
				}
				if (skippy < 0) || (iNdEx+skippy) < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if (iNdEx + skippy) > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				if !options.DiscardUnknown {
					x.unknownFields = append(x.unknownFields, dAtA[iNdEx:iNdEx+skippy]...)
				}
				iNdEx += skippy
			}
		}

		if iNdEx > l {
			return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
		}
		return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, nil
	}
	return &protoiface.Methods{
		NoUnkeyedLiterals: struct{}{},
		Flags:             protoiface.SupportMarshalDeterministic | protoiface.SupportUnmarshalDiscardUnknown,
		Size:              size,
		Marshal:           marshal,
		Unmarshal:         unmarshal,
		Merge:             nil,
		CheckInitialized:  nil,
	}
}

var (
	md_SingletonDescriptor    protoreflect.MessageDescriptor
	fd_SingletonDescriptor_id protoreflect.FieldDescriptor
)

func init() {
	file_cosmos_orm_v1alpha1_orm_proto_init()
	md_SingletonDescriptor = File_cosmos_orm_v1alpha1_orm_proto.Messages().ByName("SingletonDescriptor")
	fd_SingletonDescriptor_id = md_SingletonDescriptor.Fields().ByName("id")
}

var _ protoreflect.Message = (*fastReflection_SingletonDescriptor)(nil)

type fastReflection_SingletonDescriptor SingletonDescriptor

func (x *SingletonDescriptor) ProtoReflect() protoreflect.Message {
	return (*fastReflection_SingletonDescriptor)(x)
}

func (x *SingletonDescriptor) slowProtoReflect() protoreflect.Message {
	mi := &file_cosmos_orm_v1alpha1_orm_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

var _fastReflection_SingletonDescriptor_messageType fastReflection_SingletonDescriptor_messageType
var _ protoreflect.MessageType = fastReflection_SingletonDescriptor_messageType{}

type fastReflection_SingletonDescriptor_messageType struct{}

func (x fastReflection_SingletonDescriptor_messageType) Zero() protoreflect.Message {
	return (*fastReflection_SingletonDescriptor)(nil)
}
func (x fastReflection_SingletonDescriptor_messageType) New() protoreflect.Message {
	return new(fastReflection_SingletonDescriptor)
}
func (x fastReflection_SingletonDescriptor_messageType) Descriptor() protoreflect.MessageDescriptor {
	return md_SingletonDescriptor
}

// Descriptor returns message descriptor, which contains only the protobuf
// type information for the message.
func (x *fastReflection_SingletonDescriptor) Descriptor() protoreflect.MessageDescriptor {
	return md_SingletonDescriptor
}

// Type returns the message type, which encapsulates both Go and protobuf
// type information. If the Go type information is not needed,
// it is recommended that the message descriptor be used instead.
func (x *fastReflection_SingletonDescriptor) Type() protoreflect.MessageType {
	return _fastReflection_SingletonDescriptor_messageType
}

// New returns a newly allocated and mutable empty message.
func (x *fastReflection_SingletonDescriptor) New() protoreflect.Message {
	return new(fastReflection_SingletonDescriptor)
}

// Interface unwraps the message reflection interface and
// returns the underlying ProtoMessage interface.
func (x *fastReflection_SingletonDescriptor) Interface() protoreflect.ProtoMessage {
	return (*SingletonDescriptor)(x)
}

// Range iterates over every populated field in an undefined order,
// calling f for each field descriptor and value encountered.
// Range returns immediately if f returns false.
// While iterating, mutating operations may only be performed
// on the current field descriptor.
func (x *fastReflection_SingletonDescriptor) Range(f func(protoreflect.FieldDescriptor, protoreflect.Value) bool) {
	if x.Id != uint32(0) {
		value := protoreflect.ValueOfUint32(x.Id)
		if !f(fd_SingletonDescriptor_id, value) {
			return
		}
	}
}

// Has reports whether a field is populated.
//
// Some fields have the property of nullability where it is possible to
// distinguish between the default value of a field and whether the field
// was explicitly populated with the default value. Singular message fields,
// member fields of a oneof, and proto2 scalar fields are nullable. Such
// fields are populated only if explicitly set.
//
// In other cases (aside from the nullable cases above),
// a proto3 scalar field is populated if it contains a non-zero value, and
// a repeated field is populated if it is non-empty.
func (x *fastReflection_SingletonDescriptor) Has(fd protoreflect.FieldDescriptor) bool {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.SingletonDescriptor.id":
		return x.Id != uint32(0)
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.SingletonDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.SingletonDescriptor does not contain field %s", fd.FullName()))
	}
}

// Clear clears the field such that a subsequent Has call reports false.
//
// Clearing an extension field clears both the extension type and value
// associated with the given field number.
//
// Clear is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_SingletonDescriptor) Clear(fd protoreflect.FieldDescriptor) {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.SingletonDescriptor.id":
		x.Id = uint32(0)
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.SingletonDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.SingletonDescriptor does not contain field %s", fd.FullName()))
	}
}

// Get retrieves the value for a field.
//
// For unpopulated scalars, it returns the default value, where
// the default value of a bytes scalar is guaranteed to be a copy.
// For unpopulated composite types, it returns an empty, read-only view
// of the value; to obtain a mutable reference, use Mutable.
func (x *fastReflection_SingletonDescriptor) Get(descriptor protoreflect.FieldDescriptor) protoreflect.Value {
	switch descriptor.FullName() {
	case "cosmos.orm.v1alpha1.SingletonDescriptor.id":
		value := x.Id
		return protoreflect.ValueOfUint32(value)
	default:
		if descriptor.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.SingletonDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.SingletonDescriptor does not contain field %s", descriptor.FullName()))
	}
}

// Set stores the value for a field.
//
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType.
// When setting a composite type, it is unspecified whether the stored value
// aliases the source's memory in any way. If the composite value is an
// empty, read-only value, then it panics.
//
// Set is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_SingletonDescriptor) Set(fd protoreflect.FieldDescriptor, value protoreflect.Value) {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.SingletonDescriptor.id":
		x.Id = uint32(value.Uint())
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.SingletonDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.SingletonDescriptor does not contain field %s", fd.FullName()))
	}
}

// Mutable returns a mutable reference to a composite type.
//
// If the field is unpopulated, it may allocate a composite value.
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType
// if not already stored.
// It panics if the field does not contain a composite type.
//
// Mutable is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_SingletonDescriptor) Mutable(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.SingletonDescriptor.id":
		panic(fmt.Errorf("field id of message cosmos.orm.v1alpha1.SingletonDescriptor is not mutable"))
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.SingletonDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.SingletonDescriptor does not contain field %s", fd.FullName()))
	}
}

// NewField returns a new value that is assignable to the field
// for the given descriptor. For scalars, this returns the default value.
// For lists, maps, and messages, this returns a new, empty, mutable value.
func (x *fastReflection_SingletonDescriptor) NewField(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "cosmos.orm.v1alpha1.SingletonDescriptor.id":
		return protoreflect.ValueOfUint32(uint32(0))
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: cosmos.orm.v1alpha1.SingletonDescriptor"))
		}
		panic(fmt.Errorf("message cosmos.orm.v1alpha1.SingletonDescriptor does not contain field %s", fd.FullName()))
	}
}

// WhichOneof reports which field within the oneof is populated,
// returning nil if none are populated.
// It panics if the oneof descriptor does not belong to this message.
func (x *fastReflection_SingletonDescriptor) WhichOneof(d protoreflect.OneofDescriptor) protoreflect.FieldDescriptor {
	switch d.FullName() {
	default:
		panic(fmt.Errorf("%s is not a oneof field in cosmos.orm.v1alpha1.SingletonDescriptor", d.FullName()))
	}
	panic("unreachable")
}

// GetUnknown retrieves the entire list of unknown fields.
// The caller may only mutate the contents of the RawFields
// if the mutated bytes are stored back into the message with SetUnknown.
func (x *fastReflection_SingletonDescriptor) GetUnknown() protoreflect.RawFields {
	return x.unknownFields
}

// SetUnknown stores an entire list of unknown fields.
// The raw fields must be syntactically valid according to the wire format.
// An implementation may panic if this is not the case.
// Once stored, the caller must not mutate the content of the RawFields.
// An empty RawFields may be passed to clear the fields.
//
// SetUnknown is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_SingletonDescriptor) SetUnknown(fields protoreflect.RawFields) {
	x.unknownFields = fields
}

// IsValid reports whether the message is valid.
//
// An invalid message is an empty, read-only value.
//
// An invalid message often corresponds to a nil pointer of the concrete
// message type, but the details are implementation dependent.
// Validity is not part of the protobuf data model, and may not
// be preserved in marshaling or other operations.
func (x *fastReflection_SingletonDescriptor) IsValid() bool {
	return x != nil
}

// ProtoMethods returns optional fastReflectionFeature-path implementations of various operations.
// This method may return nil.
//
// The returned methods type is identical to
// "google.golang.org/protobuf/runtime/protoiface".Methods.
// Consult the protoiface package documentation for details.
func (x *fastReflection_SingletonDescriptor) ProtoMethods() *protoiface.Methods {
	size := func(input protoiface.SizeInput) protoiface.SizeOutput {
		x := input.Message.Interface().(*SingletonDescriptor)
		if x == nil {
			return protoiface.SizeOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Size:              0,
			}
		}
		options := runtime.SizeInputToOptions(input)
		_ = options
		var n int
		var l int
		_ = l
		if x.Id != 0 {
			n += 1 + runtime.Sov(uint64(x.Id))
		}
		if x.unknownFields != nil {
			n += len(x.unknownFields)
		}
		return protoiface.SizeOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Size:              n,
		}
	}

	marshal := func(input protoiface.MarshalInput) (protoiface.MarshalOutput, error) {
		x := input.Message.Interface().(*SingletonDescriptor)
		if x == nil {
			return protoiface.MarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Buf:               input.Buf,
			}, nil
		}
		options := runtime.MarshalInputToOptions(input)
		_ = options
		size := options.Size(x)
		dAtA := make([]byte, size)
		i := len(dAtA)
		_ = i
		var l int
		_ = l
		if x.unknownFields != nil {
			i -= len(x.unknownFields)
			copy(dAtA[i:], x.unknownFields)
		}
		if x.Id != 0 {
			i = runtime.EncodeVarint(dAtA, i, uint64(x.Id))
			i--
			dAtA[i] = 0x8
		}
		if input.Buf != nil {
			input.Buf = append(input.Buf, dAtA...)
		} else {
			input.Buf = dAtA
		}
		return protoiface.MarshalOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Buf:               input.Buf,
		}, nil
	}
	unmarshal := func(input protoiface.UnmarshalInput) (protoiface.UnmarshalOutput, error) {
		x := input.Message.Interface().(*SingletonDescriptor)
		if x == nil {
			return protoiface.UnmarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Flags:             input.Flags,
			}, nil
		}
		options := runtime.UnmarshalInputToOptions(input)
		_ = options
		dAtA := input.Buf
		l := len(dAtA)
		iNdEx := 0
		for iNdEx < l {
			preIndex := iNdEx
			var wire uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
				}
				if iNdEx >= l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				wire |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			fieldNum := int32(wire >> 3)
			wireType := int(wire & 0x7)
			if wireType == 4 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: SingletonDescriptor: wiretype end group for non-group")
			}
			if fieldNum <= 0 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: SingletonDescriptor: illegal tag %d (wire type %d)", fieldNum, wire)
			}
			switch fieldNum {
			case 1:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
				}
				x.Id = 0
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					x.Id |= uint32(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
			default:
				iNdEx = preIndex
				skippy, err := runtime.Skip(dAtA[iNdEx:])
				if err != nil {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, err
				}
				if (skippy < 0) || (iNdEx+skippy) < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if (iNdEx + skippy) > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				if !options.DiscardUnknown {
					x.unknownFields = append(x.unknownFields, dAtA[iNdEx:iNdEx+skippy]...)
				}
				iNdEx += skippy
			}
		}

		if iNdEx > l {
			return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
		}
		return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, nil
	}
	return &protoiface.Methods{
		NoUnkeyedLiterals: struct{}{},
		Flags:             protoiface.SupportMarshalDeterministic | protoiface.SupportUnmarshalDiscardUnknown,
		Size:              size,
		Marshal:           marshal,
		Unmarshal:         unmarshal,
		Merge:             nil,
		CheckInitialized:  nil,
	}
}

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.0
// 	protoc        (unknown)
// source: cosmos/orm/v1alpha1/orm.proto

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// TableDescriptor describes an ORM table.
type TableDescriptor struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// primary_key defines the primary key for the table.
	PrimaryKey *PrimaryKeyDescriptor `protobuf:"bytes,1,opt,name=primary_key,json=primaryKey,proto3" json:"primary_key,omitempty"`
	// index defines one or more secondary indexes.
	Index []*SecondaryIndexDescriptor `protobuf:"bytes,2,rep,name=index,proto3" json:"index,omitempty"`
	// id is a non-zero integer ID that must be unique within the
	// tables and singletons in this file. It may be deprecated in the future when this
	// can be auto-generated.
	Id uint32 `protobuf:"varint,3,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *TableDescriptor) Reset() {
	*x = TableDescriptor{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cosmos_orm_v1alpha1_orm_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TableDescriptor) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TableDescriptor) ProtoMessage() {}

// Deprecated: Use TableDescriptor.ProtoReflect.Descriptor instead.
func (*TableDescriptor) Descriptor() ([]byte, []int) {
	return file_cosmos_orm_v1alpha1_orm_proto_rawDescGZIP(), []int{0}
}

func (x *TableDescriptor) GetPrimaryKey() *PrimaryKeyDescriptor {
	if x != nil {
		return x.PrimaryKey
	}
	return nil
}

func (x *TableDescriptor) GetIndex() []*SecondaryIndexDescriptor {
	if x != nil {
		return x.Index
	}
	return nil
}

func (x *TableDescriptor) GetId() uint32 {
	if x != nil {
		return x.Id
	}
	return 0
}

// PrimaryKeyDescriptor describes a table primary key.
type PrimaryKeyDescriptor struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// fields is a comma-separated list of fields in the primary key. Spaces are
	// not allowed. Supported field types, their encodings, and any applicable constraints
	// are described below.
	//   - uint32, uint64 are encoded as big-endian fixed width bytes and support
	//   sorted iteration.
	//   - string's are encoded as raw bytes in terminal key segments and null-terminated
	//   in non-terminal segments. Null characters are thus forbidden in strings.
	//   string fields support sorted iteration.
	//   - bytes are encoded as raw bytes in terminal segments and length-prefixed
	//   with a single byte in non-terminal segments. Because of this byte arrays
	//   longer than 255 bytes are unsupported and bytes fields should not
	//   be assumed to be lexically sorted. If you have a byte array longer than
	//   255 bytes that you'd like to index, you should consider hashing it first.
	//   - int32, sint32, int64, sint64 are encoding as fixed width bytes with
	//   an encoding that enables sorted iteration.
	//   - google.protobuf.Timestamp and google.protobuf.Duration are encoded
	//   as 12 bytes using an encoding that enables sorted iteration.
	//   - enum fields are encoded using varint encoding and do not support sorted
	//   iteration.
	//   - bool fields are encoded as a single byte 0 or 1.
	//
	// All other fields types are unsupported in keys including repeated and
	// oneof fields.
	//
	// Primary keys are prefixed by the varint encoded table id and the byte 0x0
	// plus any additional prefix specified by the schema.
	Fields string `protobuf:"bytes,1,opt,name=fields,proto3" json:"fields,omitempty"`
	// auto_increment specifies that the primary key is generated by an
	// auto-incrementing integer. If this is set to true fields must only
	// contain one field of that is of type uint64.
	AutoIncrement bool `protobuf:"varint,2,opt,name=auto_increment,json=autoIncrement,proto3" json:"auto_increment,omitempty"`
	// references specifies that this primary key references the primary key
	// of another table. See the documentation for the SecondaryIndexDescriptor.references
	// field for more details. An additional constraint placed on primary keys
	// which reference another table is that those references cannot be circular.
	References string `protobuf:"bytes,3,opt,name=references,proto3" json:"references,omitempty"`
}

func (x *PrimaryKeyDescriptor) Reset() {
	*x = PrimaryKeyDescriptor{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cosmos_orm_v1alpha1_orm_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PrimaryKeyDescriptor) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PrimaryKeyDescriptor) ProtoMessage() {}

// Deprecated: Use PrimaryKeyDescriptor.ProtoReflect.Descriptor instead.
func (*PrimaryKeyDescriptor) Descriptor() ([]byte, []int) {
	return file_cosmos_orm_v1alpha1_orm_proto_rawDescGZIP(), []int{1}
}

func (x *PrimaryKeyDescriptor) GetFields() string {
	if x != nil {
		return x.Fields
	}
	return ""
}

func (x *PrimaryKeyDescriptor) GetAutoIncrement() bool {
	if x != nil {
		return x.AutoIncrement
	}
	return false
}

func (x *PrimaryKeyDescriptor) GetReferences() string {
	if x != nil {
		return x.References
	}
	return ""
}

// PrimaryKeyDescriptor describes a table secondary index.
type SecondaryIndexDescriptor struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// fields is a comma-separated list of fields in the index. The supported
	// field types are the same as those for PrimaryKeyDescriptor.fields.
	// Index keys are prefixed by the varint encoded table id and the varint
	// encoded index id plus any additional prefix specified by the schema.
	//
	// In addition the the field segments, non-unique index keys are suffixed with
	// any additional primary key fields not present in the index fields so that the
	// primary key can be reconstructed. Unique indexes instead of being suffixed
	// store the remaining primary key fields in the value..
	Fields string `protobuf:"bytes,1,opt,name=fields,proto3" json:"fields,omitempty"`
	// id is a non-zero integer ID that must be unique within the indexes for this
	// table. It may be deprecated in the future when this can be auto-generated.
	Id uint32 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	// unique specifies that this an unique index.
	Unique bool `protobuf:"varint,3,opt,name=unique,proto3" json:"unique,omitempty"`
	// references specifies that this index references another table defined in the same
	// proto file. Currently references are not support to tables with composite
	// primary keys, therefore fields must reference one field and its type must
	// be the same type as the primary key field of the referenced table.
	// References to tables in defined by different proto files are not supported
	// to avoid tight coupling of dependencies. Beyond validating that the reference
	// is valid key constraints are currently not enforced, but references should
	// be used by clients to perform automatic joins.
	References string `protobuf:"bytes,4,opt,name=references,proto3" json:"references,omitempty"`
}

func (x *SecondaryIndexDescriptor) Reset() {
	*x = SecondaryIndexDescriptor{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cosmos_orm_v1alpha1_orm_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SecondaryIndexDescriptor) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SecondaryIndexDescriptor) ProtoMessage() {}

// Deprecated: Use SecondaryIndexDescriptor.ProtoReflect.Descriptor instead.
func (*SecondaryIndexDescriptor) Descriptor() ([]byte, []int) {
	return file_cosmos_orm_v1alpha1_orm_proto_rawDescGZIP(), []int{2}
}

func (x *SecondaryIndexDescriptor) GetFields() string {
	if x != nil {
		return x.Fields
	}
	return ""
}

func (x *SecondaryIndexDescriptor) GetId() uint32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *SecondaryIndexDescriptor) GetUnique() bool {
	if x != nil {
		return x.Unique
	}
	return false
}

func (x *SecondaryIndexDescriptor) GetReferences() string {
	if x != nil {
		return x.References
	}
	return ""
}

// TableDescriptor describes an ORM singleton table which has at most one instance.
type SingletonDescriptor struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// id is a non-zero integer ID that must be unique within the
	// tables and singletons in this file. It may be deprecated in the future when this
	// can be auto-generated.
	Id uint32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *SingletonDescriptor) Reset() {
	*x = SingletonDescriptor{}
	if protoimpl.UnsafeEnabled {
		mi := &file_cosmos_orm_v1alpha1_orm_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SingletonDescriptor) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SingletonDescriptor) ProtoMessage() {}

// Deprecated: Use SingletonDescriptor.ProtoReflect.Descriptor instead.
func (*SingletonDescriptor) Descriptor() ([]byte, []int) {
	return file_cosmos_orm_v1alpha1_orm_proto_rawDescGZIP(), []int{3}
}

func (x *SingletonDescriptor) GetId() uint32 {
	if x != nil {
		return x.Id
	}
	return 0
}

var file_cosmos_orm_v1alpha1_orm_proto_extTypes = []protoimpl.ExtensionInfo{
	{
		ExtendedType:  (*descriptorpb.MessageOptions)(nil),
		ExtensionType: (*TableDescriptor)(nil),
		Field:         104503790,
		Name:          "cosmos.orm.v1alpha1.table",
		Tag:           "bytes,104503790,opt,name=table",
		Filename:      "cosmos/orm/v1alpha1/orm.proto",
	},
	{
		ExtendedType:  (*descriptorpb.MessageOptions)(nil),
		ExtensionType: (*SingletonDescriptor)(nil),
		Field:         104503791,
		Name:          "cosmos.orm.v1alpha1.singleton",
		Tag:           "bytes,104503791,opt,name=singleton",
		Filename:      "cosmos/orm/v1alpha1/orm.proto",
	},
}

// Extension fields to descriptorpb.MessageOptions.
var (
	// table specifies that this message will be used as an ORM table. It cannot
	// be used together with the singleton option.
	//
	// optional cosmos.orm.v1alpha1.TableDescriptor table = 104503790;
	E_Table = &file_cosmos_orm_v1alpha1_orm_proto_extTypes[0]
	// singleton specifies that this message will be used as an ORM singleton. It cannot
	// be used together with the table option.
	//
	// optional cosmos.orm.v1alpha1.SingletonDescriptor singleton = 104503791;
	E_Singleton = &file_cosmos_orm_v1alpha1_orm_proto_extTypes[1]
)

var File_cosmos_orm_v1alpha1_orm_proto protoreflect.FileDescriptor

var file_cosmos_orm_v1alpha1_orm_proto_rawDesc = []byte{
	0x0a, 0x1d, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2f, 0x6f, 0x72, 0x6d, 0x2f, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x2f, 0x6f, 0x72, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x13, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2e, 0x6f, 0x72, 0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x31, 0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x6f, 0x72,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xb2, 0x01, 0x0a, 0x0f, 0x54, 0x61, 0x62, 0x6c, 0x65,
	0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x6f, 0x72, 0x12, 0x4a, 0x0a, 0x0b, 0x70, 0x72,
	0x69, 0x6d, 0x61, 0x72, 0x79, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x29, 0x2e, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2e, 0x6f, 0x72, 0x6d, 0x2e, 0x76, 0x31, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x50, 0x72, 0x69, 0x6d, 0x61, 0x72, 0x79, 0x4b, 0x65, 0x79,
	0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x6f, 0x72, 0x52, 0x0a, 0x70, 0x72, 0x69, 0x6d,
	0x61, 0x72, 0x79, 0x4b, 0x65, 0x79, 0x12, 0x43, 0x0a, 0x05, 0x69, 0x6e, 0x64, 0x65, 0x78, 0x18,
	0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2d, 0x2e, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2e, 0x6f,
	0x72, 0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x53, 0x65, 0x63, 0x6f,
	0x6e, 0x64, 0x61, 0x72, 0x79, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69,
	0x70, 0x74, 0x6f, 0x72, 0x52, 0x05, 0x69, 0x6e, 0x64, 0x65, 0x78, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x02, 0x69, 0x64, 0x22, 0x75, 0x0a, 0x14, 0x50,
	0x72, 0x69, 0x6d, 0x61, 0x72, 0x79, 0x4b, 0x65, 0x79, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x6f, 0x72, 0x12, 0x16, 0x0a, 0x06, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x06, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x12, 0x25, 0x0a, 0x0e, 0x61,
	0x75, 0x74, 0x6f, 0x5f, 0x69, 0x6e, 0x63, 0x72, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x0d, 0x61, 0x75, 0x74, 0x6f, 0x49, 0x6e, 0x63, 0x72, 0x65, 0x6d, 0x65,
	0x6e, 0x74, 0x12, 0x1e, 0x0a, 0x0a, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x73,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63,
	0x65, 0x73, 0x22, 0x7a, 0x0a, 0x18, 0x53, 0x65, 0x63, 0x6f, 0x6e, 0x64, 0x61, 0x72, 0x79, 0x49,
	0x6e, 0x64, 0x65, 0x78, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x6f, 0x72, 0x12, 0x16,
	0x0a, 0x06, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06,
	0x66, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0d, 0x52, 0x02, 0x69, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x75, 0x6e, 0x69, 0x71, 0x75, 0x65,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06, 0x75, 0x6e, 0x69, 0x71, 0x75, 0x65, 0x12, 0x1e,
	0x0a, 0x0a, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x73, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0a, 0x72, 0x65, 0x66, 0x65, 0x72, 0x65, 0x6e, 0x63, 0x65, 0x73, 0x22, 0x25,
	0x0a, 0x13, 0x53, 0x69, 0x6e, 0x67, 0x6c, 0x65, 0x74, 0x6f, 0x6e, 0x44, 0x65, 0x73, 0x63, 0x72,
	0x69, 0x70, 0x74, 0x6f, 0x72, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0d, 0x52, 0x02, 0x69, 0x64, 0x3a, 0x5e, 0x0a, 0x05, 0x74, 0x61, 0x62, 0x6c, 0x65, 0x12, 0x1f,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18,
	0xee, 0xb3, 0xea, 0x31, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x63, 0x6f, 0x73, 0x6d, 0x6f,
	0x73, 0x2e, 0x6f, 0x72, 0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x2e, 0x54,
	0x61, 0x62, 0x6c, 0x65, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x6f, 0x72, 0x52, 0x05,
	0x74, 0x61, 0x62, 0x6c, 0x65, 0x3a, 0x6a, 0x0a, 0x09, 0x73, 0x69, 0x6e, 0x67, 0x6c, 0x65, 0x74,
	0x6f, 0x6e, 0x12, 0x1f, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x4f, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x18, 0xef, 0xb3, 0xea, 0x31, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x28, 0x2e, 0x63,
	0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2e, 0x6f, 0x72, 0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68,
	0x61, 0x31, 0x2e, 0x53, 0x69, 0x6e, 0x67, 0x6c, 0x65, 0x74, 0x6f, 0x6e, 0x44, 0x65, 0x73, 0x63,
	0x72, 0x69, 0x70, 0x74, 0x6f, 0x72, 0x52, 0x09, 0x73, 0x69, 0x6e, 0x67, 0x6c, 0x65, 0x74, 0x6f,
	0x6e, 0x42, 0xd3, 0x01, 0x0a, 0x17, 0x63, 0x6f, 0x6d, 0x2e, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73,
	0x2e, 0x6f, 0x72, 0x6d, 0x2e, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x42, 0x08, 0x4f,
	0x72, 0x6d, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x40, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2f, 0x63, 0x6f, 0x73,
	0x6d, 0x6f, 0x73, 0x2d, 0x73, 0x64, 0x6b, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x63, 0x6f, 0x73, 0x6d,
	0x6f, 0x73, 0x2f, 0x6f, 0x72, 0x6d, 0x2f, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x3b,
	0x6f, 0x72, 0x6d, 0x76, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xa2, 0x02, 0x03, 0x43, 0x4f,
	0x58, 0xaa, 0x02, 0x13, 0x43, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x2e, 0x4f, 0x72, 0x6d, 0x2e, 0x56,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xca, 0x02, 0x13, 0x43, 0x6f, 0x73, 0x6d, 0x6f, 0x73,
	0x5c, 0x4f, 0x72, 0x6d, 0x5c, 0x56, 0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0xe2, 0x02, 0x1f,
	0x43, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x5c, 0x4f, 0x72, 0x6d, 0x5c, 0x56, 0x31, 0x61, 0x6c, 0x70,
	0x68, 0x61, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea,
	0x02, 0x15, 0x43, 0x6f, 0x73, 0x6d, 0x6f, 0x73, 0x3a, 0x3a, 0x4f, 0x72, 0x6d, 0x3a, 0x3a, 0x56,
	0x31, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_cosmos_orm_v1alpha1_orm_proto_rawDescOnce sync.Once
	file_cosmos_orm_v1alpha1_orm_proto_rawDescData = file_cosmos_orm_v1alpha1_orm_proto_rawDesc
)

func file_cosmos_orm_v1alpha1_orm_proto_rawDescGZIP() []byte {
	file_cosmos_orm_v1alpha1_orm_proto_rawDescOnce.Do(func() {
		file_cosmos_orm_v1alpha1_orm_proto_rawDescData = protoimpl.X.CompressGZIP(file_cosmos_orm_v1alpha1_orm_proto_rawDescData)
	})
	return file_cosmos_orm_v1alpha1_orm_proto_rawDescData
}

var file_cosmos_orm_v1alpha1_orm_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_cosmos_orm_v1alpha1_orm_proto_goTypes = []interface{}{
	(*TableDescriptor)(nil),             // 0: cosmos.orm.v1alpha1.TableDescriptor
	(*PrimaryKeyDescriptor)(nil),        // 1: cosmos.orm.v1alpha1.PrimaryKeyDescriptor
	(*SecondaryIndexDescriptor)(nil),    // 2: cosmos.orm.v1alpha1.SecondaryIndexDescriptor
	(*SingletonDescriptor)(nil),         // 3: cosmos.orm.v1alpha1.SingletonDescriptor
	(*descriptorpb.MessageOptions)(nil), // 4: google.protobuf.MessageOptions
}
var file_cosmos_orm_v1alpha1_orm_proto_depIdxs = []int32{
	1, // 0: cosmos.orm.v1alpha1.TableDescriptor.primary_key:type_name -> cosmos.orm.v1alpha1.PrimaryKeyDescriptor
	2, // 1: cosmos.orm.v1alpha1.TableDescriptor.index:type_name -> cosmos.orm.v1alpha1.SecondaryIndexDescriptor
	4, // 2: cosmos.orm.v1alpha1.table:extendee -> google.protobuf.MessageOptions
	4, // 3: cosmos.orm.v1alpha1.singleton:extendee -> google.protobuf.MessageOptions
	0, // 4: cosmos.orm.v1alpha1.table:type_name -> cosmos.orm.v1alpha1.TableDescriptor
	3, // 5: cosmos.orm.v1alpha1.singleton:type_name -> cosmos.orm.v1alpha1.SingletonDescriptor
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	4, // [4:6] is the sub-list for extension type_name
	2, // [2:4] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_cosmos_orm_v1alpha1_orm_proto_init() }
func file_cosmos_orm_v1alpha1_orm_proto_init() {
	if File_cosmos_orm_v1alpha1_orm_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_cosmos_orm_v1alpha1_orm_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TableDescriptor); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cosmos_orm_v1alpha1_orm_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PrimaryKeyDescriptor); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cosmos_orm_v1alpha1_orm_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SecondaryIndexDescriptor); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_cosmos_orm_v1alpha1_orm_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SingletonDescriptor); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_cosmos_orm_v1alpha1_orm_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 2,
			NumServices:   0,
		},
		GoTypes:           file_cosmos_orm_v1alpha1_orm_proto_goTypes,
		DependencyIndexes: file_cosmos_orm_v1alpha1_orm_proto_depIdxs,
		MessageInfos:      file_cosmos_orm_v1alpha1_orm_proto_msgTypes,
		ExtensionInfos:    file_cosmos_orm_v1alpha1_orm_proto_extTypes,
	}.Build()
	File_cosmos_orm_v1alpha1_orm_proto = out.File
	file_cosmos_orm_v1alpha1_orm_proto_rawDesc = nil
	file_cosmos_orm_v1alpha1_orm_proto_goTypes = nil
	file_cosmos_orm_v1alpha1_orm_proto_depIdxs = nil
}